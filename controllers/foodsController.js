const Food = require("../models/food");

const fetchAllFoods = async (req, res) => {
  const foods = await Food.find();
  res.json({ foods: foods });
}



const fetchFood =  async (req, res) => {
  const foodId = req.params.id;
  const food = await Food.findById(foodId);
  res.json({ food: food });
}



const createFood = async (req, res) => {
  //   console.log(BODY: ${req.body})
    const title = req.body.title;
    const body = req.body.body;
  
    const food = await Food.create({
      title: title,
      body: body
    });
    res.json({ food: food});
  }
  
  
  const updatedFood = async (req, res) => {
    // 1. Get the id of the url
  const foodId = req.params.id
  // 2. Get the data of the id
    const {title,body} = req.body
  // 3. find and update the Note
  const updatedFood = await Food.findByIdAndUpdate(foodId,{
    title: title,
    body: body
  })
  // 4. Retrieve updatedNote and send it as a response
  res.json({food: updatedFood})
  }
      
    
    
    const deleteFood = async (req, res) => {
      const foodId = req.params.id
      await Food.deleteOne({
        id: foodId
      })
      res.json({success: "Record has been daeleted successfully"})
    }
    
    
    module.exports = {
      fetchAllFoods,
      fetchFood,
      createFood,
      updatedFood,
      deleteFood
    }