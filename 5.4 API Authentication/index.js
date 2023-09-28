import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "khusi";
const yourPassword = "srivastava";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  try{
    const result=await axios.get(API_URL +"random")
    res.render("index.ejs",{content: JSON.stringify(result.data)});
  }
  catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
  try{
       const result=await axios.get(
        API_URL + "/all?page=2",
        {},
        {
          auth: {
            username: yourUsername,
            password: yourPassword,
          },
        }
      );
      res.render("index.ejs",{content: JSON.stringify(result.data)});
  }

 catch(error){
      res.status(404).send(error.message);
 }
});

app.get("/apiKey", async(req, res) => {
       try{
        const result= await axios.get(API_URL+"/filter",{
          params:{
            score:5,
            apikey:yourAPIKey,
          }
        })
        res.render("index.ejs",{content: JSON.stringify(result.data)});
       }
       catch(error){
        res.status(404).send(error.message);
       }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(
      API_URL + "/all?page=2",
      {},
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
