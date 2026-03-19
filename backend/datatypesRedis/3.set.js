import client from "../clients.js"

async function init() {
    //del option sInter and sUnion thing for comparing
   const res=await client.sadd(" agentAi","intent routing agent")
   console.log(res)// print the 0
}
init()