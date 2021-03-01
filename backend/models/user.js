const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Имя',
  },
  username: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Имя пользователя',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return isEmail(v);
      },
      message: 'Введён неправильный формат почты',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
});

userSchema.pre('save', function (next) {
  return bcrypt.hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      console.log(this.password);
      next()
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = mongoose.model('user', userSchema);
