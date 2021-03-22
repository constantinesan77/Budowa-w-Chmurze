const express = require('express') // import expressa
const config = require('config') 

const app = express()
// const port = 8080 | nie robie coś takiego, wpisywać port
const port = process.env.PORT || config.get('port') // jeżeli mamy env i porta to wpisz port 8080 z configa


app.listen(port, () => console.log(`server listen at ${port}`)) // console.log - metoda logowania w node.js
