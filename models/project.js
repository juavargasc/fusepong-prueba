const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  mongoosePaginate = require('mongoose-paginate'),
  bcrypt = require('bcryptjs');

const projectSchema = new Schema({
  name        : {type: String, required: 'NameInvalid'},
  description : {type: String, required: 'NitInvalid'},
  company     : {type: Schema.Types.ObjectId,ref:'Company', required: 'CompanyInvalid'}
});

projectSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Project', projectSchema);