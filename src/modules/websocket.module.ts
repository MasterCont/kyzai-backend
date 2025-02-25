import { WebSocketServer } from "ws";
import { db } from "./sqlite.module";
import { sysPrint } from "./common.module";
import {return201, return400, return405, return500} from "./codes.module";
import {clientInfo, message} from "./interfaces.module";
import {IncomingMessage} from "http";

export class WebSocketManager{
    private wss: WebSocketServer;

    constructor(server: any) {
        this.wss = new WebSocketServer({ server });
        this.setupEventHandlers();
    }

    private setupEventHandlers(){
        this.wss.on('connection',  async (ws, req: IncomingMessage) => {
            await this.handleConnection(ws, req);
        });
    }

    private async handleConnection(ws: any, req: IncomingMessage){
        const client = this.getClientInfo(ws, req);
        sysPrint(`A new connection has been established: ${client.ip.red} | ${client.userAgent?.yellow}`);
        ws.on("message", (data: any) => this.handleMessage(ws, client, data));
        ws.on("close", () => this.handleClose(client));
    }

    private async getHistoryMessages(ws: WebSocket, client: clientInfo) {
        sysPrint(`${client.ip.red}: Requests the message history.`);
        const connection = await db;
        const messages = await connection.all("SELECT * FROM messages");
        await ws.send(JSON.stringify({
            type: "history",
            data: messages
        }));
    }

    private getClientInfo(ws: WebSocket, req: IncomingMessage): clientInfo {
        // Получаем IP-адрес
        if (!req) return { ws, ip: 'unknown', headers: {}, userAgent: '' };

        const ip = req.headers['x-forwarded-for']?.toString() ||
            req.socket.remoteAddress;

        // Получаем User-Agent
        const userAgent = req.headers['user-agent'];

        // Получаем все заголовки
        const headers = Object.entries(req.headers).reduce((acc, [key, value]) => {
            acc[key] = Array.isArray(value) ? value.join(', ') : value || '';
            return acc;
        }, {} as Record<string, string>);

        return {
            ws,
            ip: ip ? ip.replace('::ffff:', '') : 'unknown',
            headers,
            userAgent
        };
    }

    private validateMessage(json: message): boolean{
        return !!json.username && !!json.content;
    }

    private async handleMessage(ws: WebSocket, client: clientInfo, data: message){
        try {

            const rawData = data.toString();
            const parsedData = JSON.parse(rawData);

            if (!parsedData.type){
                return ws.send(JSON.stringify(return400("Missing message type.")));
            }

            if (parsedData.type === "history") await this.getHistoryMessages(ws, client);
            else if (parsedData.type === "message") {
                sysPrint(`${client.ip.red}: The user sent the message.`);
                if (!this.validateMessage(parsedData.data)) ws.send(JSON.stringify(return400("Incorrect message format")));
                else {
                    const savedMessage = await this.saveMessage(parsedData.data);
                    await ws.send(JSON.stringify(return201("The message was created successfully.")));
                    this.broadcastMessage(savedMessage);
                }
            } else {
                await ws.send(JSON.stringify(return405("Unknown message type.")));
            }


        } catch (e) {
            await ws.send(JSON.stringify(return500(String(e))));
        }
    }

    private async saveMessage(message: message){
        const connection = await db;
        await connection.run(
            'INSERT INTO messages (username, content) VALUES (?, ?)',
            message.username,
            message.content
        );

        return connection.get(
          'SELECT * FROM messages WHERE id = LAST_INSERT_ROWID()'
        );

    }

    private broadcastMessage(message: message) {
        this.wss.clients.forEach(client => {
           if (client.readyState === WebSocket.OPEN) {
               client.send(JSON.stringify({
                   type: "message",
                   data: message
               }));
           }
        });
    }

    private handleClose(client: clientInfo){
        sysPrint( `${client.ip.red}: Connection closed the connection.`);
    }
}