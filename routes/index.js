var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", (req, res)=>{
  res.render("index");
});

router.get("/about", (req, res)=>{
  res.render("about");
});

router.get("/services", (req, res)=>{
  res.render("services");
});

router.get("/products", (req, res)=>{
  res.render("products");
});

router.get("/contact", (req, res)=>{
  res.render("contact");
});

router.post('/contact', async (req, res) => {
  const { name, phone, email, query } = req.body;
  
      try {
        // Create a new instance of the ContactForm model
        const newContactForm = new userModel({
          name,
          phone,
          email,
          query,
        });
    
        // Save the form data to the MongoDB database
        await newContactForm.save();
    
        res.render("index");
      } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Internal Server Error');
      }
    });

module.exports = router;
