const User = require('../modules/userModule');


exports.getAllUsers = async(req,res) => {
    
    try{
        console.log(req);
        const users = await User.find({});
        res.status(200).json({
            status : 'success',
            results : users.length,
            data : {
                user : users
            }
        });
    }catch(err){
        res.status(400).json({
            status : 'fail',
            message : 'this is error to get all users'
        });
    }
};

exports.getUser = async(req,res)=>{
    try{
        const data = await User.findById(req.params.id);
        res.status(200).json({
            status : 'success',
            data : {
                user : data
            }
        });
    }catch(err){
        res.status(400).json({
            status : 'fail',
            message : 'this is error to get all users'
        });
    }
};

exports.createUser = async(req,res)=>{
    try{
        console.log(req.body);
        const newUser = await User.create(req.body);
        res.status(200).json({
            status : 'success',
            data : {
                user : newUser
            }
        });
    }catch(err){
        res.status(400).json({
            status : 'fail',
            message : 'this is error to create user'
        });
    }
};

exports.updateUser = async(req,res)=>{
    try{
        const data = await User.findByIdAndUpdate(req.body);
        res.status(200).json({
            status : 'success',
            data : {
                user : data
            }
        });
    }catch(err){
        res.status(400).json({
            status : 'fail',
            message : 'this is error to get all users'
        });
    }
};

exports.deleteUser = async(req,res)=>{
    try{
        const data = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status : 'success',
        });
    }catch(err){
        res.status(400).json({
            status : 'fail',
            message : 'this is error to delete user'
        });
    }
};