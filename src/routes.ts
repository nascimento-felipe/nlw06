import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureadmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const CREATEUSERCONTROLLER = new CreateUserController();
const CREATETAGCONTROLLER = new CreateTagController();
const AUTHENTICATEUSERCONTROLLER = new AuthenticateUserController();
const CREATE_COMPLIMENT_CONTROLLER = new CreateComplimentController();
const listUsercomplimentsReceive = new ListUserReceiveComplimentsController();
const listUsercomplimentsSend = new ListUserSendComplimentsController();
const listTags = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users", CREATEUSERCONTROLLER.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, CREATETAGCONTROLLER.handle);
router.post("/login", AUTHENTICATEUSERCONTROLLER.handle)
router.post("/compliments", ensureAuthenticated, CREATE_COMPLIMENT_CONTROLLER.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUsercomplimentsSend.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUsercomplimentsReceive.handle)
router.get("/tags", ensureAuthenticated, listTags.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

export { router };