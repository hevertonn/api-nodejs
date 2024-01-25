import { Router, Request, Response } from "express";
import { createUser, deleteUser, findUser, updateUser } from "./controllers";

export const router = Router;

router.post("/", (req: Request, res: Response) => createUser(req.body, res));
router.get("/:id", (req: Request, res:Response) => findUser(req.query.id, res));
router.put("/:id", (req: Request, res: Response) => updateUser(req.query.id, req.body res))
router.delete("/:id", (req: Request, res: Response) => deleteUser(req.query.id, res))
