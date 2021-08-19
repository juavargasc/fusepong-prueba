const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  mongoosePaginate = require('mongoose-paginate'),
  bcrypt = require('bcryptjs');

const commentSchema = new Schema({
  description : {type: String, required: 'NitInvalid'},
  ticket      : {type: Schema.Types.ObjectId,ref:'Ticket', required: 'TicketInvalid'},
  user        : {type: Schema.Types.ObjectId,ref:'User', required: 'UserInvalid'}
});

commentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Comment', commentSchema);