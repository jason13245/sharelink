import * as redis from 'redis';

let client = redis.createClient({
    host: 'localhost',
    port: 6379
});
client.on('err',(err)=>{
    console.log('Error'+err);
});

export let addlink = (list:string)=>{
    client.LPUSH('list',list)
}
export let getlist = (cb:Function)=>{
    let output
    client.LRANGE('list',0,-1,(err,data)=>{
        cb(data);
     });
}