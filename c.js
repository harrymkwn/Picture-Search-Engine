const mongoose = require('mongoose');

const uri = "mongodb+srv://harrymkwn:Harry@194@picture-search-engine-vqfqq.mongodb.net/Instagram?retryWrites=true&w=majority";
// mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true },function (e) {
//     if(e)throw e;
//     console.log("successfully connected");
//     db.close();
// });

mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log("connected successfully");
    }).then(con=>{
        console.log(con.connections);
        console.log("successfully connected");
    });

