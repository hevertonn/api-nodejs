import express, { Express } from "express";
import cors from "cors";
import { router } from "./routes";

const port = process.env.PORT || 8080;
const host = process.env.HOST;

const app: Express = express().use(cors()).use(express.json()).use("/", router);

app.listen(port, () => {
  console.log(`Server is running on ${host}${port}`);
});
