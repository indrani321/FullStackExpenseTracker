const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const db = require('./database/db')

const getRouter= require('./router/getRoutes');
const postRouter = require('./router/postRoutes');
const deleteRouter = require('./router/deleteRoutes');
const editRouter = require('./router/editRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/',getRouter);
app.use('/',postRouter);
app.use('/',deleteRouter);
app.use('/',editRouter);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})


app.listen(5000,()=>{console.log("server start at port 5000")});