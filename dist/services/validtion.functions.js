"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.condition = void 0;
const eq = (cond, res) => {
    if (cond.field_value === cond.condition_value) {
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: Object.assign({ error: false }, cond)
            }
        });
    }
    else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: Object.assign({ error: true }, cond)
            }
        });
    }
};
const neq = (cond, res) => {
    if (cond.field_value !== cond.condition_value) {
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: Object.assign({ error: false }, cond)
            }
        });
    }
    else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: Object.assign({ error: true }, cond)
            }
        });
    }
};
const gt = (cond, res) => {
    if (cond.field_value > cond.condition_value) {
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: Object.assign({ error: false }, cond)
            }
        });
    }
    else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: Object.assign({ error: true }, cond)
            }
        });
    }
};
const gte = (cond, res) => {
    if (cond.field_value >= cond.condition_value) {
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: Object.assign({ error: false }, cond)
            }
        });
    }
    else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: Object.assign({ error: true }, cond)
            }
        });
    }
};
const contains = (cond, res) => {
    if (cond.field_value.includes(cond.condition_value)) {
        return res.status(200).json({
            status: "success",
            message: `field ${cond.field} successfully validated.`,
            data: {
                validation: Object.assign({ error: false }, cond)
            }
        });
    }
    else {
        return res.status(400).json({
            status: "error",
            message: `field ${cond.field} failed validation.`,
            data: {
                validation: Object.assign({ error: true }, cond)
            }
        });
    }
};
exports.condition = {
    "eq": eq,
    "neq": neq,
    "gt": gt,
    "gte": gte,
    "contains": contains
};
