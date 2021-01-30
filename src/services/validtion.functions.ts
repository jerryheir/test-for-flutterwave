import { Response } from "express";

const eq = (cond: any, res: Response) => {
    if (cond.field_value === cond.condition_value){
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: {
                  error: false,
                  ...cond
                }
            }
        })
    } else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: {
                  error: true,
                  ...cond
                }
            }
        })
    }
}

const neq = (cond: any, res: Response) => {
    if (cond.field_value !== cond.condition_value){
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: {
                  error: false,
                  ...cond
                }
            }
        })
    } else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: {
                  error: true,
                  ...cond
                }
            }
        })
    }
}

const gt = (cond: any, res: Response) => {
    if (cond.field_value > cond.condition_value){
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: {
                  error: false,
                  ...cond
                }
            }
        })
    } else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: {
                  error: true,
                  ...cond
                }
            }
        })
    }
}

const gte = (cond: any, res: Response) => {
    if (cond.field_value >= cond.condition_value){
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: {
                  error: false,
                  ...cond
                }
            }
        })
    } else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: {
                  error: true,
                  ...cond
                }
            }
        })
    }
}

const contains = (cond: any, res: Response) => {
    if (cond.field_value.includes(cond.condition_value)){
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: {
                  error: false,
                  ...cond
                }
            }
        })
    } else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: {
                  error: true,
                  ...cond
                }
            }
        })
    }
}

export const condition = {
    "eq": eq,
    "neq": neq,
    "gt": gt,
    "gte": gte,
    "contains": contains
}