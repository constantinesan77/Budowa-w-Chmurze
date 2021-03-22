const mongoose = require('mongoose');

class Db{
    constructor(config) {

        const url = process.env.url || config.get('url');
        connect()
    }

    connect(){
        mongoose.connect('mongodb://localhost/myDB')
        .then(() => console.log("Connected to Mongodb"))
        .catch((err) => console.error("Couldn`t connect to MongoDb", err));

    }
    

    insert(collection, data){

    }

    update(collection, data){

    }

    find(collection, query){

    }
    
    remove(collection, data){

    }
}

module.exports = Db