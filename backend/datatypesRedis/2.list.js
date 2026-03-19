import client from "../clients.js"
// we can push the data like stack or queue using the lpush(),rpush() like left and the right of it
// we can lpop of rpop for it 
//we can blpop missings we can pop the data of with in the sec we set blop("nameContainer","sec to perform")
async function init() {
  /*   await client.lpush("messages",2)
    await client.lpush("messages",3)
    await client.lpush("messages",4) */
    const result= await client.blpop("messages",20)
    console.log(result)
}
init()