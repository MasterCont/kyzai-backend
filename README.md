# Kyzai-backend
Серверная часть онлайн-мессенджера "Kyzai". Разработана в рамках обучения в Центре цифрового образования "IT-CUBE".
## Установка

## 🚀 Запуск приложения

1. Установите зависимости:
```bash
npm install
```

2. Соберите и запустите проект:

```bash
npm run build
npm run start
```

Сервер будет доступен по адресу: http://<адрес_сервера>:23094



## 📡 API Endpoints

#### Получить историю сообщений

```http
  GET /history
```

Пример ответа:

```json
{
  "code": 200,
  "status": "OK",
  "reason": "Messages list",
  "data": [
    {
      "id": 1,
      "username": "steve",
      "content": "Hello!",
      "timestamp": "2025-02-21 19:57:24"
    },
    {
      "id": 2,
      "username": "maria", 
      "content": "Hello, Steve!",
      "timestamp": "2025-02-21 19:58:00"
    }
  ]
}
```

#### Отправить сообщение

```http
  GET /message
  Content-Type: application/json

{
  "username": "User",
  "content": "Hello, world!"
}
```

Пример ответа:

```json
{
  "code": 201,
  "status": "Created",
  "reason": "Message sent",
  "data": {
    "id": 3,
    "username": "User",
    "content": "Hello, world!",
    "timestamp": "2025-02-21 20:04:04"
  }
}
```

#### Шуточный эндпоинт

```http
  GET /teapot
```

Пример ответа:

```json
{
  "code": 418,
  "status": "I'm a teapot",
  "reason": "The server refuses to brew coffee because it is a teapot"
}
```



## 🛠 Технологии
TypeScript
Express.js
SQLite


## 📂 Структура проекта

```src/
├── app.ts          # Основной файл приложения
└── routes/
    └── common.routes.ts # Маршруты API
└── modules/
    └── common.modules.ts # Основные методы
    └── time.modules.ts # Методы работы с временем
    └── codes.modules.ts # Методы с генерацией rest-api-json структуры
    └── sqlite.modules.ts # Работа с базой данных
```
## 👨💻 Автор

- [@MasterCont](https://www.github.com/MasterCont)

