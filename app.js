import express from "express";

const app = express();

const port = 5004;

app.get("/", (req,res) =>{
    try {
        res.status(500).json({msg: "Hello World"})
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: error})
    }
})

app.listen(port, () =>{
    console.log(`The server is up and running ${port}`);
})