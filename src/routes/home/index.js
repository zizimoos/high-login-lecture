import route from "color-convert/route";
import express from "express";
import { getLogin, main, loginProcess, getRegister } from "../../controller";
const router = express.Router();

router.get("/", main);
router.get("/login", getLogin);
router.post("/login", loginProcess);
router.get("/register", getRegister);
// router.post("/register", loginProcess);

export default router;
