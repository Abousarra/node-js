const express = require('express')

const app = express()

app.use((req,res)=>{

    res.send('<h1>Hii monde</h1>')

})

app.listen(2266)