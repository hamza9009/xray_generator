const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://sohaib:swatkhan@cluster0.uwwqyfu.mongodb.net/Dxdatabase?retryWrites=true&w=majority').then(()=>{
console.log('Connected to MongoDB!!!')});
const User=require('../models/userSchema');


router.get('/',(req,res)=>{
    res.send('hello from server router')
});
router.post('/register',(req,res)=>{
    const {firstname,lastname,Email_address,contact_number,loginPassword}=req.body;
    console.log(req.body);
     if(!firstname||!lastname||!Email_address||!contact_number||!loginPassword)
     {
       return(res.json({error:"plz filled the field properly"}));
    }
    User.findOne({Email_address:Email_address})
    .then((userExist)=>{
        if(userExist)
          {
            return res.status(422).json({error:"Email alreadyexists"});
          }
        const user=new User({firstname, lastname,Email_address,contact_number,loginPassword

        });
        user.save().then(()=>{
            res.status(201).json({message:"user registered succefully"});
        }).catch((err)=>res.status(500).json({error:"failed to registered"}));

    }).catch(err=>{console.log(err);});
});


//login
router.post('/Login',async (req,res)=>
{
    //console.log(req.body);
    //res.json({message:"Loge in suceeefully"});
    try{
        const {Email_address,loginPassword}=req.body;  
        
        if(!Email_address||!loginPassword)
        {
            return res.status(400).json({error:"plz filled the data"});
        }
        
        const userLogin=await User.findOne({Email_address:Email_address});
       // console.log(userLogin);
       if(!userLogin)
       {
        res.status(400).json({error:"user login error"});
       }
       else{

       
              res.json({message:"user Signed in succefully"});
       }
    
    }
    catch(err){
      console.log(err);
    }
});


module.exports=router;