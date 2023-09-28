import express from "express"
const app= express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>hello world !</h1>");
});
 app.post("/register",(req,res)=>{
    res.sendStatus(201);
 });
 app.put("/user/khushi202",(req,res)=>{
    res.sendStatus(200);
 });

 app.patch("/user/khushi202",(req,res)=>{
    res.sendStatus(200);
 });

 app.delete("/user/khushi202",(req,res)=>{
    res.sendStatus(200);
 });

app.listen(port,() =>{
    console.log(`hello port ${port}`);
});