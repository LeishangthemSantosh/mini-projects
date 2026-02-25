import { initDb } from "../config/db.js";
import { decodeBase62 } from "../utils/base62.js";

const db = await initDb();

export class RecirectController {
  redirectToOriginalUrl = async (req, res) => {
    const id = decodeBase62(req.params.code);
    const url = await db.get("SELECT original_url FROM urls WHERE id = ?", [
      id,
    ]);

    res.redirect(url.original_url);
  };
}
