require("dotenv").config()
const express = require("express")
const app = express()

const port = process.env.PORT || 5000
// DATABASE
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("We're connected to our cloud database")
});
// SCHEMA
const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model("Kitten", kittySchema);

const lola = new Kitten({name: "Lola"})
console.log(lola.name)

// ROUTES
app.get("/", (req, res) => {
  res.send(lola.name) 
})

app.listen(port, console.log(`Listening on port ${port}`))