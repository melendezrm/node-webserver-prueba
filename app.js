require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Home page')
});

app.get('/hola-mundo', function (req, res) {
  res.send('Hola mundo en su respectiva ruta')
});

app.get('*', function (req, res) {
  res.send('404 | page not found')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

//app.listen(8080)

})