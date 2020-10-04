const express = require('express')
const cors = require('cors')
const route = require('./config/route')
const ConfigDB = require('./config/database')
const port  = 3031
const app = express()

ConfigDB()
app.use(express.json())
app.use(cors())
app.use(route)


app.get('/',(req,res)=>{
    res.send('hi the server is up')
    //res.send(req.useragent)
})

app.listen(port , ()=>{
    console.log("the server is listeninig on port ",port)
})