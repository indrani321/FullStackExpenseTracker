const path = require('path');
const db = require('../database/db');

function getUser(req,res){      
    const query ="SELECT * FROM userform";
     db.query(query,(error,results)=>{
   if(error){
    res.status(500).json({msg:"error"})
    console.log(error);
    }
   else{
      res.json(results)
      
       }
    })    
};

module.exports={
    getUser,
}

