import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors"; 
dotenv.config();

const app =  express();
app.use(cors());
const port = process.env.PORT;
const api = process.env.NASA_API;


app.get("/apod",async (req,res)=>{
    try{
        const answer=await axios.get("https://api.nasa.gov/planetary/apod",{
            params:  {api_key: api}
        });
        res.json(answer.data);
        console.log(answer.data.copyright);
    }catch(error){
        res.status(500).json({error:'Failed to fetch!'});
        console.log("Error");
    }

});

app.listen(port,()=>{
    console.log("Server is Running!");
});
