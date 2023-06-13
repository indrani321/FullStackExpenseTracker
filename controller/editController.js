
const path = require ('path');
const db = require('../database/db')



function getUser(req,res){
    const userId = req.params.id;
    const query = `SELECT * FROM userform where id =${userId}`;
    db.query(query,(err,results)=>{
      if(err){
        console.log(err);
        res.status(500).json({msg:"error"});
      }
      else{
        const user = results[0];
        res.json(user);
      }
    })
  };

  function editUser(req,res){
    const userId = req.params.id;
          const { amount, etype,date } = req.body;
          const query = 'UPDATE userform SET amount = ?, etype = ?,date=? WHERE id = ?';
          db.query(query, [amount, etype, date,userId], (err, results) => {
            if (err) {
              console.log(err);
              res.status(500).send('Internal Server Error');
              
            }
            else{
              res.json({msg:"updated"})
              }
      });
  };

  module.exports={
    getUser,editUser
  }
  