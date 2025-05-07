const http = require('http')
const port = 3000;
const hostname = '127.0.0.1';
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const handler = (statusCode, fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
        res.writeHead(statusCode, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
        })
    }

    if(req.url === '/'){
        handler(200, './views/home.html')
    }else if(req.url === '/about'){
        handler(200, './views/about.html')
    }else if(req.url === '/contact'){
        handler(200, './views/contact.html')
    }else{
        handler(404, './views/error.html')
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server running Successfully on http://${hostname}:${port}`)
})