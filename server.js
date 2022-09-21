const http = require('http')

const server = http.createServer((req,res)=>{
    
    res.write('Hello all world!!!!')
    res.end()

})

server.listen(2266)