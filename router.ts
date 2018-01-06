import * as express from 'express'
import { Router } from 'express';
import { addlink, getlist } from './redis_server'
import { type } from 'os';

const router = express.Router();
router.get('/', (req, res) => {
    res.render('/');
});
router.post('/api/link', (req, res) => {
    let data= JSON.stringify(req.body);
    addlink(data);
    res.json();
})
router.get('/api/links', (req, res) => {
    getlist((result:any)=>{
        res.json(result);
    });
    
})
export default router;