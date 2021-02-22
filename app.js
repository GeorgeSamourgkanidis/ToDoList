const express = require("express");
const bodyParser = require("body-parser");
//local module
const date = require(__dirname + "/date.js");
let items = ["I love eating","I love sleeping","I love playing video games"];
let workItems = [];
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res) {
  //απο το local module μου
  let day = date.getDate();
  //στο αρχειο list(ejs μεσα στο views default) αντικαθιστω το kindOfDay
  res.render('list', {
    listTitle: day,
    newListItems: items
  });
});

app.get("/work", function(req,res){
  res.render("list",{
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function(req,res){
  res.render("about");
});

app.post("/", function(req, res) {
  //Παίρνω το input απο το html
  let item = req.body.newItem;
  //Τσεκάρω σε ποιο list ειμαι για να προσθέσω ανάλογα items
  if(req.body.list === "work"){
    workItems.push(item);
    res.redirect("/work");
  } else{
    //δείνω δεδομένα στο html απο τον server και κανω redirect για να κανει ξανα
    //render τα newListItems
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("started");
});
