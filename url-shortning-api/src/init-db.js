import { initDb } from "./config/db.js";

const db = await initDb();

await db.exec(`
    CREATE TABLE IF NOT EXISTS urls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        original_url TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        clicks INTEGER DEFAULT 0
    )
`);

console.log("Database initialize and create db");

process.exit();
