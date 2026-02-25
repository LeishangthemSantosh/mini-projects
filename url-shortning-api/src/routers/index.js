import { Router } from "express";
import urlShorteningRoutes from "./url_shortening.route.js";

const router = Router();

console.log("Router Index");

router.use("/", urlShorteningRoutes);

export default router;
