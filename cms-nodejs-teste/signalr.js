//const signalR = require("@microsoft/signalr");
const signalR = require("@aspnet/signalr");
//const cors = require("cors");

const url = "https://localhost:41557/chat";

const options = {
  // withCredentials: false,
  //   headers: {
  //     "content-type": "application/json;charset=UTF-8",
  //     Accept: "*/*",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "Authorization",
  //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  //     protocol: "json",
  //     version: 1,
  //   },
  transport:
    signalR.HttpTransportType.WebSockets |
    signalR.HttpTransportType.LongPolling |
    signalR.HttpTransportType.ServerSentEvents,
  logMessageContent: true,
  logger: signalR.LogLevel.Trace,
  //   cors: {
  //     origin: "*", // Especifique as origens permitidas
  //     methods: ["GET", "POST"], // Especifique os métodos HTTP permitidos
  //     allowedHeaders: ["Content-Type", "Authorization"], // Especifique os cabeçalhos HTTP permitidos
  //   },
};

const connection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Trace)
  .withUrl(url, options)
  .build();

connection.on("broadcastMessage", (name, message) => {
  console.log(`Mensagem recebida(broadcastMessage): ${name}: ${message}`);
});

connection
  .start()
  .then(() => {
    console.log("Conectado ao SignalR!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao SignalR:", error);
  });

// node signalr.js

/*

{"protocol": "json","version": 1}
{"arguments": ["teste01", "teste02"],"target": "ReceiveMessage","type": 1}
{"arguments": ["teste01", "teste02"],"target": "broadcastMessage","type": 1}
{"type":1,"target":"send","arguments":["postman","msg"]}

*/
