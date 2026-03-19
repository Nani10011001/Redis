import client from "./clients.js";
// by using this we can set the data with set()
//we can get the info of the using the get()
// we can set the expire for the information of it like sec or hours to visiable o
async function init() {
  //await client.set("msg:6", "hey from the node js")
  //const result=await client.get("user:3")
  await client.expire("msg:6",18)
  const result=await client.get("msg:6")
  console.log("redis result: ",result)
}
init()
