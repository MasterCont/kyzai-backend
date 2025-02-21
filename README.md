# Kyzai-backend
The server part for the online messenger "Kyzai". It was developed for the period of study at the IT-CUBE Center for Digital Additional Education.

# How to start app
Write the following commands in your terminal:
```shell
    npm run build
    npm run start
```

## How to use
Get the chat history
```http request 
   GET http://<server_ip>:23094/history
```
Create a chat message
```http request
    GET http://<server_ip>:23094/message
```
```json
    "body": { // x-www-form-urlencoded
        username: "User",
        content: "Hello, world!"
  }
```

Get a joke teapot
```http request
    GET http://<server_ip>:23094/teapot
```

## The structure of the basic JSON response
```json
    {
      code: 200,
      status: "OK",
      reason: "Put an asterisk on the github project ^.^",
      data: [
        [
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
          },
          {
            "id": 3,
            "username": "mastercont",
            "content": "Hello, chat!",
            "timestamp": "2025-02-21 20:04:04"
          }
      ]
    }
```

## Authors
- [@MasterCont](https://www.github.com/MasterCont)