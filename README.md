# Kyzai-backend
Серверная часть онлайн-мессенджера "Kyzai". Разработана в рамках обучения в Центре цифрового образования "IT-CUBE".
## Установка

## 🚀 Запуск приложения

1. Установите зависимости:
```bash
git clone https://github.com/MasterCont/kyzai-backend.git
cd kyzai-backend
npm install
```

2. Соберите и запустите проект:

```bash
npm run build
npm run start
```

Сервер будет доступен по адресу: http://<адрес_сервера>:23094

## 📡 WebSocket API

 ### Подключение к сокету:
```js
const ws = new WebSocket('ws://localhost:23094'); // ws://<ваш_адрес_сервера>:23094

ws.onmessage = (e) => { // Если используйте веб-браузер
    console.log(e)
}
```

 ### Основные события:

    message - Отправка сообщения
    history - Получение истории чата

 ### Примеры запросов:

 #### Отправка сообщения:
```js
ws.send(JSON.stringify({
  type: "message",
  data: {
    username: "MasterCont",
    content: "Привет из README!"
  }
}));
```

 #### Получение истории сообщений из базы данных:
```js
ws.send(JSON.stringify({ 
    type: "history" 
}));
```

 #### Форматы ответов:
```json
{
  "type": "message",
  "data": {
    "id": 1,
    "username": "MasterCont",
    "content": "Hello World",
    "timestamp": "2025-02-25 22:02:10"
  }
}
```

```json
{ 
  "type": "history",
  "data": [
    {/* ... */},
    {/* ... */}
  ]
}
```


## 📡 API Endpoints

### Шуточный эндпоинт

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
    TypeScript - Основной язык разработки
    WebSocket - Реальный времени чат
    SQLite - Хранение сообщений
    Express - HTTP-сервер (для будущего расширения)


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
    └── websocket.modules.ts # Веб-сокет
    └── interfaces.modules.ts # Работа с интерфейсами
```

## 🔧 Настройка
### Добавьте в .env:
```env
 PORT=23094
 DB_PATH=./chat.db
```

## 👨💻 Автор

- [@MasterCont](https://www.github.com/MasterCont)

