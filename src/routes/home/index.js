import route from "color-convert/route";
import express from "express";
import { getLogin, main, loginProcess } from "../../controller";
const router = express.Router();

router.get("/", main);
router.get("/login", getLogin);
router.post("/login", loginProcess);

export default router;
