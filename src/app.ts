import express from "express";
import dotenv from "dotenv";
import router from "./routes/common.routes";

// Инициализация переменных
const app = express();
dotenv.config();

// Подключение компонентов
app.use(router);

// Запуск приложения
app.listen(process.env.PORT, () => {
    console.log(`The application runs on port ${process.env.PORT}`)
});