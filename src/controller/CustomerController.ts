import { getRepository } from "typeorm";
import { Customer } from "../entity/customers";
import { Third } from "../entity/third_party";
import { validateFields } from "../helper/validateFields";
import { Request, Response } from "express";

export const saveCustomer = async (request: Request, response: Response) => {
    try {
        const validate = validateFields(request.body);

        if (validate.length > 0) {
            const error = { status: 400, errors: { errors: validate } }
            throw error;
        }

        const { cpf } = request.body;
        const checkCustomer = await getRepository(Customer).findOne({ cpf });
        const checkThird = await getRepository(Third).findOne({ cpf });

        if (checkCustomer) {
            return response.status(409)
                .json({ message: "Customer already registered" })
        }

        if (checkThird) {
            getRepository(Third).delete({ cpf })
        }

        const client = await getRepository(Customer).save(request.body);

        return response.json(client);

    } catch (error) {
        response
            .status(error.status || 500)
            .send(error.errors || { message: 'Error when saving' });
    }

}

export const updateCustomer = async (request: Request, response: Response) => {
    try {
        const validate = validateFields(request.body);

        if (validate.length > 0) {
            const error = { status: 400, errors: { errors: validate } }
            throw error;
        }

        const { id } = request.params;
        const customer = await getRepository(Customer).update(id, request.body);

        if (customer.affected === 1) {
            const customerUpdated = await getRepository(Customer).findOne(id);
            return response.json(customerUpdated);
        }

        response.status(404).json({ message: 'Customer not found' })

    } catch (error) {
        response
            .status(error.status || 500)
            .send(error.errors || { message: 'Error when saving' });
    }

}

export const getCustomer = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const customer = await getRepository(Customer).findOne(id);
        return customer ? response.json(customer) : response.status(404).json(
            { message: 'Customer not found' })
    } catch (error) {
        return error;
    }

}

export const getCustomers = async (request: Request, response: Response) => {
    try {
        const customers = await getRepository(Customer).find();
        return response.json(customers);

    } catch (error) {
        return error;
    }

}
