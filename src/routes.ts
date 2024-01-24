import { Router } from "express";
import { createUser, findUser } from "./controllers";


export const routes = Router;

routes.post("/", createUser)
routes.get("/", findUser)


