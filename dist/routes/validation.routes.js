"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_controllers_1 = require("../controllers/validation.controllers");
const router = express_1.Router();
const routes = router
    .get('/', validation_controllers_1.getValidation)
    .post('/validate-rule', validation_controllers_1.postValidation);
exports.default = routes;
