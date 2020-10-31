const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');

const port=3000;

const db="mongodb+srv://sachu:sachu123@cluster-base.bonoc.mongodb.net/restaurant?retryWrites=true&w=majority"
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },(err) => {
    if(err){
        console.error("Error! "+err);
    }else{
        console.log("Connected to db successfully");
    }
})


app.use(express.static(path.join(__dirname,'dist/project-resto-mod')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
//app.use(exprss.json())
const restoRoutes=require('./server/routes/restoapi')
app.use('/api/resto',restoRoutes)
const userRoutes=require('./server/routes/userapi')
app.use('/api/user',userRoutes)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/project-resto-mod/index.html'));
})
app.listen(port,function(){
    console.log("server running on local host: "+port);
})