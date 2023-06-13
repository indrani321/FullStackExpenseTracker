
const path = require ('path');
const db = require('../database/db')

function deleteUser(req,res){
    const userId= req.params.id;
    const query = " DELETE FROM userform WHERE id=?";
    db.query(query,[userId],(error,results)=>{
      if(error){
       res.status(500).json({msg:"error"})
       console.log(error);
       }
      else{
         res.json({msg:"deleted"})
         }
    })    
  };

  module.exports= {
    deleteUser,
  }
