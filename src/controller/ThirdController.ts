import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Third } from "../entity/third_party";

export const getThirdParties = async (request: Request, response: Response) => {
    try {
       
        const thirdParties = await getRepository(Third).find();
        return response.json(thirdParties);

    } catch (error) {
        response
            .status(error.status || 500)
            .send(error.errors || { message: 'error when searching' });
    }

}