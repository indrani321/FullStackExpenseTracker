const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const db = require('./database/db')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})

//post request
app.post('/expense/add-expense',(req,res)=>{
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
})

app.get('/expense',(req,res)=>{      
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
   })

 
   app.delete('/expense/delete-expense/:id',(req,res)=>{
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
  })
  



app.listen(5000,()=>{console.log("server start at port 5000")});