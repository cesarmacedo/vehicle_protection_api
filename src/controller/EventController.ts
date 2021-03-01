import { getRepository } from "typeorm";
import { validateThird } from "../helper/validateThird";
import { Request, Response } from "express";
import { Event } from "../entity/events";
import { Customer } from "../entity/customers";
import { Third } from "../entity/third_party";

export const saveEvent = async (request: Request, response: Response) => {
    try {
        const { customer_id, third_party } = await request.body;
        const customer = await getRepository(Customer).findOne(customer_id);

        if (!customer) {
            return response.status(404).json({ message: 'Customer not found' });
        }

        const validate = await validateThird(third_party);

        if (validate.length > 0) {
            const error = { status: 400, errors: { errors: validate } }
            throw error;
        }

        third_party.map(async (element) => {
            const { cpf } = element;
            const third = await getRepository(Third).findOne({ cpf });

            if (!third) {
                getRepository(Third).save(element);
            }

        })

        const event = await getRepository(Event).save(request.body);

        return response.json(event);

    } catch (error) {
        response
            .status(error.status || 500)
            .send(error.errors || { message: 'Error when saving' });
    }

}

export const getEvents = async (request: Request, response: Response) => {
    try {
       
        const Events = await getRepository(Event).find();
        return response.json(Events);

    } catch (error) {
        response
            .status(error.status || 500)
            .send(error.errors || { message: 'Error when saving' });
    }

}