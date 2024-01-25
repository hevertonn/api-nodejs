import { Router, Request, Response } from "express";
import { createUser, deleteUser, findAllUsers, findUser, updateUser } from "./controllers";

export const router = Router();

router.post("/", (req: Request, res: Response) => createUser(req.body, res));
router.get("/", (_req: Request, res: Response) => findAllUsers(res))
router.get("/:id", (req: Request, res:Response) => findUser(req.params.id, res));
router.put("/:id", (req: Request, res: Response) => updateUser(req.params.id, req.body, res))
router.delete("/:id", (req: Request, res: Response) => deleteUser(req.params.id, res))
