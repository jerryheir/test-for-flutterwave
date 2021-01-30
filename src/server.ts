import dotenv from "dotenv";
import http from "http";
dotenv.config({ path: './config/config.env' });
import app from "./app";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV}`));
  