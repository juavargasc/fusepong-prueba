const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  mongoosePaginate = require('mongoose-paginate'),
  bcrypt = require('bcryptjs');

const ticketSchema = new Schema({
  name        : {type: String, required: 'NameInvalid'},
  description : {type: String, required: 'NitInvalid'},
  status      : {type: String, required: 'StatusInvalid'},
  userStorie  : {type: Schema.Types.ObjectId,ref:'UserStorie', required: 'UserStorieInvalid'}
});

ticketSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Ticket', ticketSchema);