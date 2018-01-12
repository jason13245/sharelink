import * as express from 'express';
import router  from './router';
import * as bodyParser from 'body-parser'
import * as cors from 'cors';
//const router:express.Router = require('./router')();

require('dotenv').config();

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(express.static('frontend/dist'));
app.use('/',router);



app.listen(3000, () => console.log('Link Sharing app listening on port 3000!!'))