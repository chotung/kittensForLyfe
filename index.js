require("dotenv").config()
const express = require("express")
const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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

// ROUTES

// GET ALL KITTENS
app.get("/api/kittens", async (req, res) => {
  const allKittens = await Kitten.find({})
  res.json(allKittens)
})

// POST A KITTEN
app.post("/api/kittens", async (req, res) => {
  const { name } = req.body
  const newKitten = await Kitten.create({
    name
  })
  res.json(newKitten);
});




app.listen(port, console.log(`Listening on port ${port}`))