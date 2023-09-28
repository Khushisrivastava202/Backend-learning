const fs= require("fs");
// fs.writeFile("message.txt","HEllo from NodeJS!",(err)=>{
//     if(err) throw err;
//     console.log("file has been saved!");
// });

fs.readFile('./message.txt',"utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 