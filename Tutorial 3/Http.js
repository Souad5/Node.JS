const http = require('http')
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
    res.end("<h1>Joy Bangla</h1>")
})

server.listen(port,hostname,()=>{
    console.log(`Server running Successfully on http://${hostname}:${port}`)
})