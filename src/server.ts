import 'reflect-metadata';
import express from 'express';
import "./database";

const app = express();



app.get('/',(req, res) =>{
    return res.json({msg:'Hello world nlw 04'});
});

app.post('/',(req, res) =>{
    return res.json({msg:'Os dados foram salvo com sucesso!'});
});


app.listen(3030,()=>{
    console.log("Server running on port 3030");
});