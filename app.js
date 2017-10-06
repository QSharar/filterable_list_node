var express = require("express");
var bp = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use("/public" , express.static(path.join(__dirname, "public")));

var names = [   "Andres" , 
                "Beck" , 
                "Cassie", 
                "David" , 
                "Sheri",
                "Estell", 
                "Lafortune",
                "Allene", 
                "Lemoine",
                "Lorrie",
                "Cissell",
                "Karlyn",
                "Clendening",
                "Melda",
                "Batchelder",
                "Kourtney" ,
                "Justin",
                "Eveline",
                "Matter",
                "Gaye",
                "Kaczynski"
            ] 



app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.get("/", (req, res ) => {
    console.log(`${req.method} -> ${req.url}`);
    res.render('list', {msg: names});
}).listen(9000);


