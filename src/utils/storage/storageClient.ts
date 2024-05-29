// client.ts
import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to CoinJoin server');
});

ws.on('message', (message) => {
    console.log('Received:', message.toString());
});

function sendMessage(message: string) {
    ws.send(message);
}

// Example usage: send a message to the server
sendMessage('Hello from client');
