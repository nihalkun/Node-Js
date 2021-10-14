const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080
const getMessage = require('./services/message')
const routeController = require('./routes/v1')()
const middleware = require('./middleware/test_mw')
app.get('/',middleware.test_mw,(req, res)=>{
    res.status(200).json({
        succes : true,
        message : getMessage.getUserMessage('GET')
    })
})

app.post('/',(req, res)=>{
    res.status(200).json({
        succes : true,
        message : getMessage.getUserMessage('POST')
    })
})

app.use('/api/v1', routeController)

app.listen(port,()=>{
    console.log('Server has started and it is listening on PORT :',port)
})

