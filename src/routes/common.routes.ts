import { Router } from "express";
import {db} from "../modules/sqlite.module";
import {return200, return201, return400, return404, return418, return500} from "../modules/codes.module";

// Создаём основной роутер
const router = Router();

// Обработка главного маршрута
router.get("/", (req, res) => {
    res.status(200).json(return200("Hello, world", {something: "This just for example"}))
});

// Вывод истории сообщений
router.get("/history", async (req, res) => {
    const connection = await db;
    const messages = await connection.all("SELECT * FROM messages");
    res.status(200).json(return200("The story is received.", messages));
});

router.get("/message", async (req, res) => {
   try {

       const { username, content } = req.body;

       // Валидация
       if (!username || !content) {
          res.status(400).json(return400("Username and content are required."));
       } else {
           // Сохранение в БД
           const connection = await db;
           await connection.run(
               "INSERT INTO messages (username, content) VALUES (?, ?)",
               username,
               content
           );

           // Получаем последнее сообщение для ответа
           const message = await connection.get(
               "SELECT * FROM messages ORDER BY id DESC LIMIT 1"
           );

           res.status(201).json(return201("Message sent", message));
       }

   } catch (e) {
       res.status(500).json(return500(String(e)));
   }
});

// Обработка "шуточного" запроса
router.get("/teapot", (req, res) => {
    res.status(418).json(return418());
});

// Обработка несуществующих маршрутов
router.use((req, res) => {
    res.status(404).json(return404(`Cannot GET ${req.originalUrl}`));
})

export default router;
