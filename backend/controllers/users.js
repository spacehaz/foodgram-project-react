require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFound = require('../utils/Errors/NotFound');
const BadRequest = require('../utils/Errors/BadRequest');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getOwnerInfo = (req, res, next) => {
  User.findById(
    req.user.id
  ).orFail(() => {
    throw new NotFound('Не найден');
  })
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) { res.status(409).send({ message: 'Не введен логин или пароль' }); }
  User.findOne({ email })
    .then((user) => {
      if (user) { res.status(400).send({ message: 'Такой пользователь уже есть' }); }
    });
  bcrypt.hash(password, 10).then((hash) => User.create({
    email: req.body.email,
    password: hash,
    name: req.body.name,
    about: req.body.about,
    avatar: req.body.avatar
  }).then((user) => {
    res.status(200).send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      password: hash,
      email: user.email
    });
  })).catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      return res.send({ token });
    }).catch(e => {
      console.log(e)
      throw new BadRequest('Что-то не так с авторизацией');
    })
    .catch(next);
};
