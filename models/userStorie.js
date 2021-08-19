const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  mongoosePaginate = require('mongoose-paginate'),
  bcrypt = require('bcryptjs');

const userStorieSchema = new Schema({
  name        : {type: String, required: 'NameInvalid'},
  description : {type: String, required: 'NitInvalid'},
  project     : {type: Schema.Types.ObjectId,ref:'Project', required: 'ProjectInvalid'}
});

userStorieSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('UserStorie', userStorieSchema);