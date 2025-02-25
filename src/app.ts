import express from "express";
import { WebSocketManager } from "./modules/websocket.module";
import dotenv from "dotenv";
import { createServer } from "http";
import router from "./routes/common.routes";
import {sysPrint} from "./modules/common.module";

// Инициализация переменных
const app = express();
const server = createServer(app);
new WebSocketManager(server); // Инициализация веб-сокета

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Для form-data
dotenv.config();

// Подключение компонентов
app.use(router);

// Запуск приложения
server.listen(process.env.PORT, () => {
    sysPrint(`The application runs on port ${process.env.PORT}`);
});