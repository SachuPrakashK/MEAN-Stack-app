const express=require("express");
const router=express.Router();
const restomodel=require("../models/restomodel");
const verify=require('../routes/verifytoken')

router.get('/',function(req,res){
    restomodel.find({}).exec(function(err,restos){
        if(err){
            console.log("Error");
        }else{
            res.json(restos);
        }

    });
})

router.post('/',verify,function(req,res){
    const resto=new restomodel({
        name:req.body.name,
        address:req.body.address,
        email:req.body.email,
    })
    resto.save(function(err,insertedResto){
        if(err){
            console.log("Error");
            res.status(400).send(err);
        }else{
            res.json(insertedResto);
        }

    })
})

router.get('/:id',function(req,res){
    restomodel.findById(req.params.id).exec(function(err,getresto){
        if(err){
            console.log("err")
        }else{
            res.json(getresto)
        }
    })
})
router.put('/:id',verify,function(req,res){
    restomodel.findByIdAndUpdate(req.params.id,{
        $set:{ name:req.body.name,
        address:req.body.address,
        email:req.body.email
        }
    },
    {
        new:true
    },
    function(err,updatedresto){
        if(err){
            res.send("Error updating resto");
        }else{
            res.json(updatedresto);
        }
    }
    )
})

router.delete('/:id',verify,function(req,res){
    restomodel.findByIdAndRemove(req.params.id,function(err,deletedresto){
        if(err){
            console.log("Error");
        }else{
            res.json(deletedresto);
        }

    });
})

module.exports=router;