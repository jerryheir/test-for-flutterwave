import express, { Application } from "express";
import morgan from "morgan";
import validations from "./routes/validation.routes";

const app: Application = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(`/`, validations);

export default app;