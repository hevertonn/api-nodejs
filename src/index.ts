import express, { Express } from "express";
import { router } from "./routes";

const port = process.env.PORT || 8080;

const app: Express = express().use(express.json()).use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
