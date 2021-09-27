const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello Test');
});

app.listen(4000, () => console.log('Server is up on PORT 4000'));