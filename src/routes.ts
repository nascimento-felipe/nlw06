import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const CREATEUSERCONTROLLER = new CreateUserController();

router.post("/users", CREATEUSERCONTROLLER.handle);

export { router };