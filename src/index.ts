import express, { Express } from "express";
import cors from "cors";
import { routes } from "./routes";

const port = process.env.PORT || 8080;

const app: Express = express().use(cors()).use(express.json()).use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
