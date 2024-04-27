const Drink = require("../models/drink");

const fetchAllDrinks = async (req, res) => {
  const drinks = await Drink.find();
  res.json({ drinks: drinks });
}

const fetchDrink =  async (req, res) => {
  const drinkId = req.params.id;
  const drink = await Drink.findById(drinkId);
  res.json({ drink: drink });
}

const createDrink = async (req, res) => {
  //   console.log(BODY: ${req.body})
    const title = req.body.title;
    const body = req.body.body;
  
    const drink = await Drink.create({
      title: title,
      body: body
    });
    res.json({ drink: drink });
  }
  
 
  
  
const updatedDrink = async(req, res) => {
  // 1. Get the id of the url
const drinkId = req.params.id
// 2. Get the data of the id
  const {title,body} = req.body
// 3. find and update the drink
const updatedDrink = await Drink.findByIdAndUpdate(drinkId,{
  title: title,
  body: body
})
// 4. Retrieve updatedNote and send it as a response
res.json({drink: updatedDrink})
}
      
    
const deleteDrink =  async(req, res)=>{
  const drinkId = req.params.id
  await Drink.deleteOne({
    id: drinkId
  })
  res.json({success: "Record has been daeleted successfully"})
}
    
    
    module.exports = {
      fetchAllDrinks,
      fetchDrink,
      createDrink,
      updatedDrink,
      deleteDrink
    }