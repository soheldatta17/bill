const express = require("express");
const path = require("path");
const fs = require("fs");
const { log } = require("console");
const app = express();
const port = 3000;
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
// ...

// Use bodyParser.json() middleware to parse JSON data
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://soheldatta17:sohel_17rik@cluster0.cgka43s.mongodb.net/PSG', { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://soheldatta17:sohel_17rik@cluster0.cgka43s.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are connected')
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://soheldatta17:sohel_17rik@cluster0.cgka43s.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




const UserSchema = new mongoose.Schema({

  Name: String,
  Item: String,
  Date: String,
  Cost: String,
});


const Kitten = mongoose.model("bill", UserSchema);

app.use('/static', express.static('static'))

app.set('view engine', 'pug')

app.engine('pug', require('pug').__express);
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) => {
  res.status(200).render('1.pug');
})
app.get('/home', (req, res) => {
  res.status(200).render('1.pug');
})
app.post('/', async (req, res) => {
  try {
    const person=req.body.person;
    const name = req.body.name;
    const date = req.body.date;
    const cost = req.body.cost;
    const a = req.body
    const createPlaylist = new Kitten({
      Name: person,
      Item: name,
      Date: date,
      Cost: cost,
    });

    const savedData = await createPlaylist.save();
    console.log(person);
    console.log(name);
    console.log(date);
    console.log(cost);
    console.log(a);

    return res.status(200).json({ success: 'Data saved successfully', data: savedData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while saving data' });
  }
});
app.get('/2', (req, res) => {
  res.status(200).render('2.pug');
});


app.get('/login', async (req, res) => {
  // res.status(200).render('2.pug');
  try {
    const data = await Kitten.find({});
    const retrievedData = data;
    console.log(retrievedData);
    res.status(200).json(retrievedData); // Respond with JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving data' });
  }
});


app.listen(port, () => {
  console.log(`The application started sucessfully on port ${port}`)
})
