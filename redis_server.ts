import * as redis from 'redis';

let client = redis.createClient({
    host: 'localhost',
    port: 6379
});
client.on('err',(err)=>{
    console.log('Error'+err);
});

export let addlink = (list:string)=>{
    client.LPUSH('list',list);
}
export let getlist = (cb:Function)=>{
    client.LRANGE('list',0,-1,(err,data)=>{
        cb(data);
     });
}
export let addFd = (newFd:string)=>{
    client.LPUSH('fd',newFd);
}
export let getFd = (cb:Function)=>{
    client.LRANGE('fd',0,-1,(err,data)=>{
        cb(data);
    })
}
export let storeMsg=(name:string,msg:string)=>{
    client.RPUSH(name,msg); 
}
export let getMsg=(name:string,cb:Function)=>{
    client.LRANGE(name,0,-1,(err,data)=>{
        if(err){
            console.log(err);
        }
        let result:Array<{name:string,msg:string}>;
        result=data.map((ele)=>{
            return JSON.parse(ele);
        })
        console.log(result);
        cb(result);
    })
}