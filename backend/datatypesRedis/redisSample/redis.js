import client from "../../clients.js";
import axios from "axios";
import express from "express"
const router=express.Router()

router.get("/redis/todo",async(req,res)=>{
    console.log("routing is added")
try {
    const cacheValue=await client.get("todos")
    if(cacheValue) {
        console.log("cache hit")
        return res.json(JSON.parse(cacheValue))
    }
   const data= await axios.get("https://jsonplaceholder.typicode.com/todos")
   console.log("cache miss")
    await client.set("todos",JSON.stringify(data.data), "EX", 60)
    console.log(data.data)
return res.json(data.data)

} catch (error) {
 console.error(error)
 return res.json({
    message:"internal server error"
 })   
}
})

export default router