import "./Config/dotenvConfig.js"
import express from "express";
import axios from "axios";
import router from "./datatypesRedis/redisSample/redis.js";
const app = express();

app.use(express.json())

app.use("/api",router)
const PORT=process.env.PORT || 5000

const serverStart=async()=>{
  try {
    app.listen(PORT, () => {
  console.log("http://localhost:5000");
});
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
serverStart()

