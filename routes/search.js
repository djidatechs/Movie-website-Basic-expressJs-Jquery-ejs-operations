var express = require('express');
const router = express.Router();
const {custumFilter} = require("./functions")
const paginator = require("./middlewares")
const searching = require("./db.json")
/* GET users listing. */
router.get('/', paginator() ,  function(req, res, next) {
  console.log(res.RESPONCE)
  res.render('searchResults' ,  {output : res.RESPONCE} );
});

router.get('/:id', (req , res )=>{
   const id = req.params.id ; 
   console.log(id)
   if (!id) return res.render("nosearch")
   var index = 0 ; 
   var found = false ;
   while (index < searching.length && !found) {
    if ( searching[index].id == id ) found = true 
    else index ++ 
   }
   if (found) { 
     let time = searching[index].release_date 
     let date = new Date(time).toDateString()
     searching[index].release_date = date ;
     console.log(date)
     res.render ("search" , { searched : searching[index] })
   }
   else res.render("nosearch")

})
module.exports =  router





