import express from "express"
import router from "./Routes/APIRoutes.js";
import cors from "cors"

const port = 4000;
const server = express()

server.use(cors());

server.listen(port , (er)=>
{
    if(er)
    {
        console.log(er);
    }
    else 
    {
        console.log(`Server listening on ${port}`);
    }
})

server.use("/", router);