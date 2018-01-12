import * as express from 'express'
import { Router } from 'express';
import { addlink, getlist } from './redis_server'
import { friendlist } from "./friendlist";
//import { type } from 'os';

const router = express.Router();
router.get('/', (req, res) => {
    res.render('/');
});
router.post('/api/link', (req, res) => {
    let data= JSON.stringify(req.body);
    console.log(req.body);
    console.log(typeof req.body);
    addlink(data);
    res.json(req.body);
})
router.get('/api/links', (req, res) => {
    getlist((result:any)=>{
        console.log(result);
        console.log(typeof result);
        res.json(result);
    });
    
})
router.get('/api/getlist',(req,res)=>{
    let data= friendlist;
    //console.log(data);
    res.json(data);
})

export default router;