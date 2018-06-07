var db = require('../../config/db');

module.exports = function(){
  this.all = function(retorno){
    var con = db();
    return con.query('select * from api_buyer',retorno);
  };

  this.find = function(id,retorno){
    var con = db();
    return con.query('select * from api_buyer where id = ?',id,retorno);
  };

  this.save = function(dados,retorno){
    var con = db();
    return con.query('insert into api_buyer set ?',dados,retorno);    
  };

  return this;


};
