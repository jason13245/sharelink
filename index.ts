import * as express from 'express';
require('dotenv').config()

const app = express()

app.use(express.static('frontend/dist'));

app.get('/links', (req: express.Request, res: express.Response) => {

});

app.listen(3000, () => console.log('Link Sharing app listening on port 3000!!'))