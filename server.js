require("dotenv").config()
//---------------------------allows  .env
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb.js')
// to pull our mongoose connection into our application

const Dessert = require("./models/dessert")

const Food = require("./models/food")
const Drink = require("./models/drink")

const dessertsController = require('./controllers/dessertsController.js')
const drinksController = require('./controllers/drinksController.js')
const foodsController = require('./controllers/foodsController.js')
const cors = require('cors')

//------------------------receiving cross origins
app.use(express.json())
// to allow express to convert our data to json
app.use(cors())
//-------------------------------database connection

connectToDb()
// this initializes our connectToDB() function
//--------------------------------------------Requirements

//--------------------------------------------- Routing

app.get('/', (req, res) => {
  res.send("This is the landing page");
});

// We want to establish CRUD routes for our  Dessert Models
app.get('/desserts', dessertsController.fetchAllDesserts);
//---------------------------------------------GET All Dessert

app.get('/desserts:id', dessertsController.fetchDessert);
//---------------------------GET a specific dessert

//---------------------------------------------READ

app.post('/desserts', dessertsController.createDessert);
//---------------------------create a dessert

app.put('/desserts/:id', dessertsController.updatedDessert);
// //---------------------------------------------Update


app.delete('/desserts/:id', dessertsController.deleteDessert);
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// // We want to establish CRUD routes for our Drink Models
app.get('/drinks', drinksController.fetchAllDrinks);
//--------------------------------GET All drinks
app.get('/drinks/:id', drinksController.fetchDrink);
//---------------------------GET a specific drink

//---------------------------------------------read

app.post('/drinks', drinksController.createDrink);
//---------------------------create all
app.put("/drinks/:id", drinksController.updatedDrink);
// //---------------------------------------------Update
app.delete("/drinks/:id", drinksController.deleteDrink);
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// We want to establish CRUD routes for our  Food Models
app.get('/foods', foodsController.fetchAllFoods);
//-------------------------------------------GET All foods
app.get('/foods/:id', foodsController.fetchFood );
//---------------------------GET a specific food

//---------------------------------------------Read

app.post('/foods', );
//---------------------------create a food

app.put('/foods/:id', foodsController.createFood);
//---------------------------------------------Update
app.delete('/foods/:id', foodsController.deleteFood );
//---------------------------------------------Delete
//------------------------------------------------------------CRUD


app.listen(PORT, () => {
  console.log(`Express server listening on port num: ${PORT}`);
});
