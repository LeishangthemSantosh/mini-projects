import { initDb } from "../config/db.js";
import { encodeBase62, decodeBase62 } from "../utils/base62.js";

const db = await initDb();

export class UrlShorteningController {
  storeUrl = async (req, res) => {
    const data = req.body;

    const { url } = data;

    const result = await db.run("INSERT INTO urls (original_url) VALUES (?)", [
      url,
    ]);

    const code = encodeBase62(result.lastID);

    return res.status(200).json({
      status: 200,
      message: "Url shortened successfully",
      data: {
        shortUrl: `http://localhost:8001/${code}`,
      },
    });
  };

  getUrl = async (req, res) => {
    const code = req.params.code;

    const id = decodeBase62(code);
    const data = await db.get("SELECT * FROM urls WHERE id = ?", [id]);
    return res.status(200).json({
      status: 200,
      message: "Url shortened successfully",
      data: data,
    });
  };
}
