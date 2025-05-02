const fs = require('fs');
// console.log(fs);

fs.readFile('./demo.txt', (err ,data) =>{
    console.log(data.toString());
})

console.log("Hello World");
