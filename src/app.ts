import express from "express";
import dotenv from "dotenv";
import router from "./routes/common.routes";
import {sysPrint} from "./modules/common.module";

// Инициализация переменных
const app = express();
dotenv.config();

// Подключение компонентов
app.use(router);

// Запуск приложения
app.listen(process.env.PORT, () => {
    sysPrint(`The application runs on port ${process.env.PORT}`);
});