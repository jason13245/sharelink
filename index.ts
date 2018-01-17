import * as express from 'express';
import router from './router';
import * as bodyParser from 'body-parser'
import * as cors from 'cors';
//import { socket } from 'socket';
import { Socket } from 'net';
import { storeMsg,getMsg } from "./redis_server";

require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:8100',
    credentials: true
}));


const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(express.static('frontend/dist'));
app.use('/', router);

io.on('connection', (socket: Socket) => {
    console.log('a user connected to the socket');
    socket.on('chatmessage', (data: { name: string, msg: string }) => {
        storeMsg(data.name, data.msg);
        getMsg(data.name,(result:{name:string,msg:string}[])=>{
            socket.emit('chatmsgupdate', (result));
        })
    })
});
http.listen(3000, () => console.log('Link Sharing app listening on port 3000!!'))