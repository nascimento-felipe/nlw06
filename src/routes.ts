import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureadmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController"

const router = Router();

const CREATEUSERCONTROLLER = new CreateUserController();
const CREATETAGCONTROLLER = new CreateTagController();
const AUTHENTICATEUSERCONTROLLER = new AuthenticateUserController();
const CREATE_COMPLIMENT_CONTROLLER = new CreateComplimentController();

router.post("/users", CREATEUSERCONTROLLER.handle);
router.post("/tags", ensureAdmin, CREATETAGCONTROLLER.handle);
router.post("/login", AUTHENTICATEUSERCONTROLLER.handle)
router.post("/compliments", CREATE_COMPLIMENT_CONTROLLER.handle)

export { router };