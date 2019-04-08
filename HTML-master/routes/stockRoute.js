const express = require('express');
const app = express();
const stockRouter = express.Router();
const Stock = require('../models/car');


stockRouter.route('/').get(function (req, res) {
  Stock.find(function (err, stock) {
    res.render('การสต๊อก',{stock: stock, notFound : false }); //render collection "users"
  });
});

stockRouter.route('/').post(function (req, res) {
  const DataUser = new Stock({ 
      ID_product: req.body.ID_product, 
      date:req.body.date,
      details:req.body.details,
      color:req.body.color,
      price:req.body.price,
      amount: req.body.amount,
      product_type:req.body.product_type
       });
    DataUser.save()
    res.redirect('/stock');
});

stockRouter.route('/stock-search').post(function (req, res) {
  var search = req.body.search; //สิ่งที่ต้องการค้นหา
  console.log(search)
  if(search == ""){
    res.redirect('/stock')
  }else{
    Stock.find({ID_product: search},function (err, stock) {
      if(err){
        Stock.find(function (err, stock) {
          res.render('การสต๊อก', { stock:"" , notFound : true });
        });
      }
      else if(stock == ""){
        res.render('การสต๊อก', { stock: stock , notFound : true  });
      }else{
        res.render('การสต๊อก', { stock: stock , notFound : false  });
      }
      
    });
  }
});
module.exports = stockRouter;