
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 4000 ;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);
app.set('view engine', 'hbs');
app.set('views',template_path);
app.use(express.static(static_path));


app.get("/",(req,res)=>{
    //res.send("Welcome home page");
    res.render('index')

});
app.get("/about",(req,res)=>{
    //res.send("Welcome about page");
    res.render('about')

});
app.get("/weather",(req,res)=>{
    //res.send("Welcome weather page");
    res.render('weather')

});

app.get("*",(req,res)=>{
    //res.send("404 error page oops");
    res.render('404error',{
        errormsg:"oops !! Page Not Found",
    })
});

app.listen(port,()=>{
    console.log(`Listing port number at ${port}`);
});