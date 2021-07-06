const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var item = ["Bring Food","Cook Food","Eat Food"];
var work = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// app.get("/", function(req,res){
//   res.send("Hello!");
// });

app.get("/", function(req,res){
  var today = new Date();
  //var day = "";

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day = today.toLocaleDateString("en-US", options);

  res.render("list", {listTitle: day, newItem: item});
  // console.log(today.getDay());
});

app.post("/", function(req,res){
  if(req.body.list==="Work"){
    work.push(req.body.newItem);
    res.redirect("/work");
  } else {
    item.push(req.body.newItem);
    res.redirect("/");
  }

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work", newItem: work})
})

// app.post("/work", function(req,res){
//   console.log(req.body);
//
// })
app.get("/about", function(req,res){
  res.render("about");
})

app.listen(3000,function(){
  console.log("Server is running");
});
