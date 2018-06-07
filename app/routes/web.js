var clienteController = require('../controllers/clienteController');

module.exports = function(app){
  app.get('/',function(req,res){
    res.render('site/home');
  });

  app.get('/api',function(req,res){
    res.render('site/api');
  });

  app.get('/checkout',function(req,res){
    res.render('site/checkout');
  });

  app.get('/allBuyers',function(req,res){
    res.render('site/allBuyers');
  });

  app.post('/allBuyers',function(req,res){
    clienteController.store(req,res);
  });

  app.post('/allBuyers',function(req,res){
    clienteController.store(req,res);
  });

};
