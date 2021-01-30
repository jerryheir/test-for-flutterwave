import { Router } from "express";
import { getValidation, postValidation } from "../controllers/validation.controllers";

const router = Router();

const routes = router
                .get('/', getValidation)
                .post('/validate-rule', postValidation);

export default routes;