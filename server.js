const express = require('express')
const app = express()
const mongodb = require('./db/connect')
const port = process.env.PORT || 3000
const route = require('./routes/index')

app.use('/', route)

mongodb.initDb((err, mongodb) => {
    if(err){
        console.log("View Error: ", err);
    }else{
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        });
    }
});



