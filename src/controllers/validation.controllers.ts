import { Request, Response } from "express";
import Services from "../services";

export const getValidation = async (req: Request, res: Response) => {
    try {
        const result = await Services.getValidation();
        return res.status(200).json(result);
    } catch(err) {
        return Services.errorCheck(err, res);
    }
}

export const postValidation = async (req: Request, res: Response) => {
    try {
        const result = await Services.postValidation(req, res);
        return result;
    } catch(err){
        return Services.errorCheck(err, res);
    }
}