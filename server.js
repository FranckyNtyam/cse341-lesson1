const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes/index')

app.use('/', route)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


