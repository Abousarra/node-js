const expressed = require('express')

const app = expressed()

app.all('/',(req,res)=>{

    res.send('<h1>Hii all</h1>')

})

app.use('/home',(req,res)=>{

    res.send('<h1>Hii home</h1>')

})

app.use('/about',(req,res,next)=>{

    res.send('<h1>Hii about</h1>')

})

app.listen(2266)