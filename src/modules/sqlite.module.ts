import {Database} from "sqlite3";
import { open } from 'sqlite';

// Подключение к БД
export const db = open({
    filename: './chat.db',
    driver: Database
});

// Инициализация таблиц
(async () => {
    const connection = await db;
    await connection.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      content TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS users (
      socket_id TEXT PRIMARY KEY,
      username TEXT
    );
  `);
})();