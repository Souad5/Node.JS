const express = require("express")
const app = express()
const Port = 3000;
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")

})

app.get('/circle', (req,res)=>{
    res.sendFile(__dirname + "/circle.html")
})
app.get('/triangle', (req,res)=>{
    res.sendFile(__dirname + "/triangle.html")
})


app.post('/circle',(req,res)=>{
    const radius = req.body.radius
    const cal = Math.PI * radius * radius
    res.send(`<h1>${cal}</h1>`)
})
app.post('/triangle',(req,res)=>{
    const base = req.body.base
    const height = req.body.height
    const cal = 0.5 * base * height
    res.send(`${cal}`)
})

app.listen(Port,()=>{
    console.log(`Server running http://localhost:${Port}`)
})
