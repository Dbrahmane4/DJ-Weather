const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatesPath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render('index')
})
app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/weather", (req, res) => {
    res.render('weather');
})
app.get("*", (req, res) => {
    res.render('404', {
        errorMsg : "Opps something went wrong !!"
    });
})

app.listen(port, (req, res) => {
    console.log(`listening to the ${port}`);
})