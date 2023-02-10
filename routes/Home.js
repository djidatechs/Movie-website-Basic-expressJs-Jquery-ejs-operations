const { query } = require('express');
var express = require('express');
var router = express.Router();
const {custumFilter} = require("./functions")
/* GET home page. */
const searching = require("./db.json")
router.get('/', function(req, res, next) {
    const interfaceFilms = [] ; 
    const interfaceSeries = [] ; 
    const interfaceMasrh = [] ;

    for (var i = 0 ; i < 14 ; i++) {
    interfaceFilms.push(searching[Math.floor(Math.random()*searching.length)])}
    
    for (var i = 0 ; i < 14 ; i++) {
        interfaceSeries.push(searching[Math.floor(Math.random()*searching.length)])}
    
    for (var i = 0 ; i < 14 ; i++) {
        interfaceMasrh.push(searching[Math.floor(Math.random()*searching.length)])}
  return res.render('home' , {interfaceFilms ,interfaceSeries ,interfaceMasrh });
});

router.get('/autocomplete', function(req, res, next) {
  try {
  const query = req.query 
  const input = query.request
  if (input == "" ) return res.json ( [])
  let output = custumFilter (input , searching);

  res.json(output.length ? output : [{label : 'nothing found'}])
  }
  catch(e){
    console.log(e)
  }
  
});
module.exports = router;



