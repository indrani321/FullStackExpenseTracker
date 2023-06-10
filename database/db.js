const mysql2 =require('mysql2');
const db= mysql2.createConnection({
    host: 'localhost' ,
    port: 3306,
    user: 'root',
    password: 'Indrani@123',
    database: 'node-complete'
})
db.connect((err)=>{
    if(err){
        console.log('not connected to database',err);
    }
    else{
        console.log('connected to the database')
    }
  })
  

module.exports=db;