const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

//database
const database = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(
            'mongodb+srv://608556007:vbO3c5gGNr6ZU2G4@yun-cheng.leavuyc.mongodb.net/?retryWrites=true&w=majority',
            connectionParams
            )
        console.log("database connected succesfully")
    }catch (error) {
        console.log(error);
        console.log('database connection failed')
    }
});

//call funtion
//database();
console.log(process.env.PORT);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});