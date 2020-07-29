const mongoose = require('mongoose')

mongoose.connect('mongodb://Radu:jyOwIyec4pqx8cr1@test-cluster-shard-00-00.cnhgd.mongodb.net:27017,test-cluster-shard-00-01.cnhgd.mongodb.net:27017,test-cluster-shard-00-02.cnhgd.mongodb.net:27017/TestDB?ssl=true&replicaSet=atlas-385wgr-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then((result) => {
    //console.log(result)
}).catch((error) => {
    //console.log("Ne-am luat error")
    //console.log(error)
})