const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req, res)=>{
    res.sendFile(__dirname+ '/views/products.html');
}
);

app.listen(3000,()=>{
    console.log('sever 3000');
});