import { Router } from "express";

// Создаём основной роутер
const router = Router();

router.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});

export default router;
