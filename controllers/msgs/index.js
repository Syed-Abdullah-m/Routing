import express from "express";

const router = express.Router();

app.get("/messages/", (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }
})