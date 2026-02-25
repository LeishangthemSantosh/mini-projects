import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../storage/database.sqlite");

export const initDb = async () => {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
};
