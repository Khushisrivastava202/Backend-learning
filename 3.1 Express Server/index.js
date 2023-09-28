import express from "express"
const app=express();
const port=3000;
app.get("/",(req,res) => {
    res.send("hell0 w0rls"); 
});


app.listen(port, ()=>{
    console.log(`Server running on port ${3000}.`);
});