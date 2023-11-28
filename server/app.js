import express from "express";
import cors from 'cors';
import Router from './router/store.js';
import { config } from "./config.js";
import { initSocket } from "./connection/server.js";
import { connectDB } from './db/database.js';

console.log(process.env.JWT_SECRET);
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', Router);

app.use((req, res, next) => {
    res.sendStatus(404);
});

connectDB().then((db) => {
    const server = app.listen(config.host.port);
    console.log('connection success')
    initSocket(server);
}).catch(console.error);