//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');


//routes
const routes = require('./controllers/burgers_controller');

//port assignment
const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set route
app.use('/', routes);

//tells app to listen to designated port
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});