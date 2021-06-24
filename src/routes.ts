import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureadmin";

const router = Router();

const CREATEUSERCONTROLLER = new CreateUserController();
const CREATETAGCONTROLLER = new CreateTagController();

router.post("/users", CREATEUSERCONTROLLER.handle);
router.post("/tags", ensureAdmin, CREATETAGCONTROLLER.handle);

export { router };