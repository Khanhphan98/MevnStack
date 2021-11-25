const mongoose  = require('mongoose');
const appConfig = require('../../config/app')

const url = `mongodb://localhost:${appConfig.mongoDB.PORT}/${appConfig.mongoDB.DB}`;

mongoose.connect(url, {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
