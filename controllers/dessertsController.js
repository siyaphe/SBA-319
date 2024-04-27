const Dessert = require("../models/dessert");


const fetchAllDesserts =  async (req, res) => {
  const desserts = await Dessert.find();
  res.json({ desserts: desserts });
}

const fetchDessert = async (req, res) => {
  const dessertId = req.params.id;
  const dessert = await Dessert.findById(dessertId);
  res.json({ dessert: dessert });
}
 
const createDessert =  async (req, res) => {
  //   console.log(BODY: ${req.body})
    const title = req.body.title;
    const body = req.body.body;
  
    const dessert = await Dessert.create({
      title: title,
      body: body
    });
    res.json({ dessert: dessert });
  }



const updatedDessert = async (req, res) => {
  // 1. Get the id of the url
  const dessertId = req.params.id
  // 2. Get the data of the id
    const {title,body} = req.body
  // 3. find and update the Note
  const updatedNote = await Dessert.findByIdAndUpdate(dessertId,{
    title: title,
    body: body
  })
  // 4. Retrieve updatedNote and send it as a response
  res.json({dessert: updatedDessert})
  }
    
  
  
  const deleteDessert = async (req, res) => {
    const dessertId = req.params.id
    await Dessert.deleteOne({
      id: dessertIdId
    })
    res.json({success: "Record has been daeleted successfully"})
  }
  
  
  module.exports = {
    fetchAllDesserts,
    fetchDessert,
    createDessert,
    updatedDessert,
    deleteDessert
  }