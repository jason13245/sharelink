import * as express from 'express'
import { Router } from 'express';
import { addlink, getlist, addFd, getFd } from './redis_server'
import { friendlist } from "./friendlist";
//import { type } from 'os';

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
router.get('/api/getlist',(req,res)=>{
    getFd((result:any)=>{
        res.json(result);
    })
})

router.post('/api/addFd',(req,res)=>{
    let data = JSON.stringify(req.body);
    addFd(data);
    res.json('success');
})

export default router;