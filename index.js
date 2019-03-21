const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.get('/home', (req,res)=> {
res.send({
  data:'hello home',
});
});

app.get('/lol', (req,res)=> {
  res.send({
    data:'hello lol',
  });
  });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
