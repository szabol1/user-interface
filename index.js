
const express = require(`express`);
const app = express();
const path = require("path")
const mongoose = require("mongoose");
require("dotenv").config();
//const userRoutes = require("./Server/routes/user");n
const userRoutes = require('./server/routes/user')
const postRoutes = require('./server/routes/posts')
mongoose.connect(process.env.dbURL)
    .then(console.log("DB Connected!"))
    .catch(error => console.log("error!"));

app.use(express.json());

app.use(express.static(__dirname + "/public"))
app.get('/',(req,res)=> res.sendFile(path.join(__dirname, '/public', 'styles', 'index.html')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});
app.use("/user", userRoutes)
app.use("/posts", postRoutes)

const PORT = process.env.PORT || 3000;//sets port

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
