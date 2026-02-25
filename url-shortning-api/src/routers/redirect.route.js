import { Router } from "express";
import { RecirectController } from "../controllers/redirect.controller.js";

const router = Router();
const redirectController = new RecirectController();

router.get("/:code", redirectController.redirectToOriginalUrl);

export default router;
