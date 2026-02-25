import { Router } from "express";
import { UrlShorteningController } from "../controllers/usl-shortening.contoller.js";

const router = Router();

const urlShorteningController = new UrlShorteningController();

router.post("/shorten-url", urlShorteningController.storeUrl);
router.get("/shorten-url/:code", urlShorteningController.getUrl);

export default router;

//   const parsed = new URL(url);
//   const protocol = parsed.protocol;
//   const domain = parsed.hostname;
//   const params = parsed.pathname;
//   const query = parsed.search;
//   const queryParams = parsed.searchParams;
//   const hash = parsed.hash;
