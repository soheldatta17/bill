const express = require("express");
const path = require("path");
const fs = require("fs");
const { log } = require("console");
const app = express();
const port = 3000;
const mongoose = require("mongoose")

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
    Email: String,
    Phone: String,
    Date_of_Birth: String,
    Experience: String,
    Text: String
});


const Kitten = mongoose.model("register", UserSchema);

app.use('/static', express.static('static'))

app.set('view engine', 'pug')

app.engine('pug', require('pug').__express);
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'))

app.get('/login', (req, res) => {
    res.status(200).render('register.pug');
})

app.get('/', (req, res) => {
    res.status(200).render('1.pug');
})
app.get('/home', (req, res) => {
    res.status(200).render('1.pug');
})
app.post('/login', (req, res) => {

    let name = req.body.name
    let emailID = req.body.emailID
    let phone = req.body.phoneNumber
    let birth = req.body.date
    let exp = req.body.counter
    let text = req.body.textarea1
    // console.log(name)
    const createPlaylist = new Kitten({
        Name: name,
        Email: emailID,
        Phone: phone,
        Date_of_Birth: birth,
        Experience: exp,
        Text: text
    });
    createPlaylist.save();

    var params = { content: 'success' }
    res.status(200).render('register.pug', params);
})


app.listen(port, () => {
    console.log(`The application started sucessfully on port ${port}`)
})
