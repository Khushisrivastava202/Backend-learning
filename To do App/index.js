import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workItems = [];

const date = new Date(); // Creates a new Date object with the current date and time
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdayString = weekdays[date.getDay()]; // Returns the string representation of the current weekday
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthString = months[date.getMonth()]; 



app.get("/",(req,res)=>{
  const day=weekdayString+", "+monthString+" "+date.getDate();
  res.render("index.ejs", {
    listTitle: day,
    newListItems: items,
  });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("index.ejs", {
    listTitle: "Work List",
    newListItems: workItems,
  });
});
app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
