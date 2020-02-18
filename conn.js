const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path : './config.env'});

let db_url = process.env.DB_CONNECTION.replace('<PASSWORD>',process.env.DB_PASSWORD);

mongoose.connect(db_url,{
    useNewUrlParser : true
}).then((con)=>console.log(con.connections));
