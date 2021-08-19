const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  mongoosePaginate = require('mongoose-paginate'),
  bcrypt = require('bcryptjs');

const companySchema = new Schema({
  name     :   {type: String, required: 'NameInvalid'},
  nit      :   {type: String, required: 'NitInvalid'},
  phone    :   {type: String, required: 'PhoneInvalid'},
  address  :   {type: String, required: 'AddressInvalid'},
  email    :   {type: String, required: 'EmailInvalid'}
});

companySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Company', companySchema);