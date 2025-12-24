require ("dotenv").config();
const express = require("express")
const app = express()
const port = 3000

const data= {"name": "sameer rana",
    "id": 8017
}

app.get("/" , (req, res)=>{
    res.send("hello world ji")
})

app.get ("/me", (req ,res)=>{
    res.json(data);
})



app.listen(process.env.PORT, ()=>{console.log("started")})