import express from 'express';
import data from './data';

const app=express();
app.get ("/api/product", (req, res)=>{
    res.send(data.product);
});
0app.listen (5000,()=>{ console.log("Server started at http://localhost:5000")});

