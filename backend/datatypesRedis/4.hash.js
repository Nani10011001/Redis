import client from "../clients.js";

async function init() {
    const fileDataAdded=await client.hset("bike1",{
        model:"pulsur 220",
        brand:"pulsur",
        price:"1 lakhs"
    })
    console.log("set datatypes",fileDataAdded)
    const result=await client.hget("bike1","model")
    console.log(result)
}
init()