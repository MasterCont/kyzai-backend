interface message{
    username: string,
    content: string
}

interface clientInfo {
    ws: WebSocket;
    ip: string;
    headers: Record<string, string>;
    userAgent?: string;
}

export {message, clientInfo}