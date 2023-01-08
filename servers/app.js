const mongoose=require('mongoose');
const express=require('express');
const app=express();


const DB='mongodb+srv://sohaib:swatkhan@cluster0.uwwqyfu.mongodb.net/Dxdatabase?retryWrites=true&w=majority';

mongoose.connect('mongodb+srv://sohaib:swatkhan@cluster0.uwwqyfu.mongodb.net/Dxdatabase?retryWrites=true&w=majority').then(()=>{
console.log('Connected to MongoDB!!!')});
const User=require('./models/userSchema');

app.use(express.json());
app.use(require('./Router/auth'));
const middleware=(req,res,next)=>
{
    console.log('helloo from midddleware');
    next();
}

app.get('/',(req,res)=>{
    res.send('hello from server not')
})
app.get('/about',middleware,(req,res)=>{
    res.send('hello from about page')
})
console.log('daa');
app.listen(3000,()=>{
    console.log('server is runing on port number3000');
})