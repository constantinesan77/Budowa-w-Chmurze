const config = require('express') 
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Hello world");
});

module.exports = app 

// zaindexować index.html