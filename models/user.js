const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    mongoosePaginate = require('mongoose-paginate'),
    bcrypt = require('bcryptjs');

const userSchema = new Schema({
  first       :   {type: String, required: 'FirstNameInvalid'},
  last        :   {type: String, required: 'LastNameInvalid'},
  user        :   {type: String, required: 'UserInvalid'},
  password    :   {type: String, required: 'PasswordInvalid'},
  company     :   {type: Schema.Types.ObjectId,ref:'Company', required: 'CompanyInvalid'}
});

userSchema.plugin(mongoosePaginate);

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);