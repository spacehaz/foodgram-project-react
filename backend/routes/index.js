const express = require('express')
const router = express.Router()
const recipes = require('./recipes')
const ingredients = require('./ingredients')

router.use('/recipes', recipes)
router.use('/ingredients', ingredients)
module.exports = router
