import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userAuthentication =false;
app.use(bodyParser.urlencoded({ extended:true}));
// app.use(express.urlencoded({ extended:true})); //Aternative but abve one is preffered so that you should know whats going on;

function checkUser(req,res,next){
   const password=req.body["password"];
   if(password==="khushi"){
    userAuthentication=true;
   }
    next();//important
  }
  app.use(checkUser);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  app.post("/check",(req,res)=>{
    if(userAuthentication){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
  });
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  