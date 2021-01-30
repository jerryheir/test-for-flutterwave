"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const validtion_functions_1 = require("./validtion.functions");
const COND = ["eq", "neq", "gt", "gte", "contains"];
const getValidation = () => () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return {
            message: "My Rule-Validation API",
            status: "success",
            data: {
                name: "Jeremiah Nwaeze",
                github: "@jerryheir",
                email: "nwaezejerry@gmail.com",
                mobile: "+2347062951438",
                twitter: ""
            }
        };
    }
    catch (err) {
        console.log(err);
    }
});
const postValidation = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rule, data } = req.body;
        if (!rule || !data)
            return res.status(400).json({
                status: "error",
                message: `${rule ? "data" : "rule"} field is required.`,
                data: null
            });
        if (typeof rule !== "object") {
            return res.status(400).json({
                status: "error",
                message: `rule should be an object.`,
                data: null
            });
        }
        if (!rule.field || !rule.condition || !COND.includes(rule.condition) || !rule.condition_value) {
            return res.status(400).json({
                success: "error",
                message: "Invalid JSON payload passed.",
                data: null
            });
        }
        const splitedRule = rule.field.trim().split(".");
        if (splitedRule.length > 2)
            return res.status(400).json({ status: "error", message: "Invalid JSON payload passed.", data: null });
        const nested = splitedRule.length > 1 ? true : false;
        if (!(parseInt(splitedRule[0]) >= 0) && (!data.hasOwnProperty(splitedRule[0]) || !data[splitedRule[0]].hasOwnProperty(splitedRule[1]))) {
            return res.status(400).json({
                success: "error",
                message: `field ${!data.hasOwnProperty(splitedRule[0]) ? splitedRule[0] : splitedRule[1]} is missing from data.`,
                data: null
            });
        }
        if ((nested === true && data.hasOwnProperty(splitedRule[0]) && data[splitedRule[0]].hasOwnProperty(splitedRule[1])) || (nested === false)) {
            const value = nested === true ? splitedRule[1] : splitedRule[0];
            switch (true) {
                case (!isNaN(parseInt(rule.field)) && typeof data === "string"): { // if rule.field is a stringified number 
                    const cond = {
                        field: rule.field,
                        condition_value: rule.condition_value,
                        condition: rule.condition,
                        field_value: data.charAt(parseInt(rule.field))
                    };
                    const result = validtion_functions_1.condition[rule.condition](cond, res);
                    return result;
                }
                case (nested === false && data.hasOwnProperty(value)): { // if its an array or JSON object
                    const cond = {
                        field: rule.field,
                        condition_value: rule.condition_value,
                        condition: rule.condition,
                        field_value: data[value]
                    };
                    const result = validtion_functions_1.condition[rule.condition](cond, res);
                    return result;
                }
                case (nested === true && data[splitedRule[0]].hasOwnProperty(value)): { // if its an array or JSON object and nested
                    const cond = {
                        field: rule.field,
                        condition_value: rule.condition_value,
                        condition: rule.condition,
                        field_value: data[splitedRule[0]][value]
                    };
                    const result = validtion_functions_1.condition[rule.condition](cond, res);
                    return result;
                }
                default: {
                    return res.status(400).json({
                        success: "error",
                        message: `field ${value} is missing from data.`,
                        data: null
                    });
                }
            }
        }
        else {
            return res.status(400).json({
                success: "error",
                message: "Invalid JSON payload passed.",
                data: null
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
const errorCheck = () => (err, res) => {
    console.log(err);
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((val) => val.message);
        return res.status(400).json({
            success: "error",
            message: messages,
            data: null
        });
    }
    return res.status(500).json({
        success: "error",
        message: "SERVER ERROR",
        data: null
    });
};
exports.default = () => {
    return {
        getValidation: getValidation(),
        postValidation: postValidation(),
        errorCheck: errorCheck()
    };
};
