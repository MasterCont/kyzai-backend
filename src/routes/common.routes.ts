import { Router } from "express";
import {return200, return404, return418} from "../modules/codes.module";

// Создаём основной роутер
const router = Router();

// Обработка главного маршрута
router.get("/", (req, res) => {
    res.status(200).json(return200("Hello, world", {something: "This just for example"}))
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
