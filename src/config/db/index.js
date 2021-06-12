const mongoose = require('mongoose');
async function connect() {


   
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/DoAnCoSo1', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true,
});
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}
module.exports = { connect }