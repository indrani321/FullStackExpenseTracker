const path = require ('path');
const db = require('../database/db')

function postUser(req,res){
    const { amount, etype, date } = req.body;
  
    const query = "INSERT INTO userform (amount, etype, date) VALUES (?, ?, ?)";
    const values = [amount, etype, date];
  
    db.query(query, values, (error, results) => {
      if (error) {

        console.log(error)
        res.status(500).json({ message: 'Error adding expense' });
      } else {
        res.json({msg:"post successfull"});
    
      }
  });
};


module.exports={postUser}