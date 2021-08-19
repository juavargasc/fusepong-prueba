const config = require('./../config');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGO_URI || config.MONGO_URI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('./../models/user'),
    Company: require('./../models/company'),
    Project: require('./../models/project'),
    UserStorie: require('./../models/userStorie'),
    Ticket: require('./../models/ticket'),
    Comment: require('./../models/comment'),
    RefreshToken: require('./../models/refresh-token'),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}