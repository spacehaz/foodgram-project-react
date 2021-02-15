const express = require('express')
const router = express.Router()
const recipes = require('./recipes')
const subscriptions = require('./subscriptions')
const purchases = require('./purchases')
const ingredients = require('./ingredients')
const favorites = require('./favorites')

// define the recipes route
router.use('/recipes', recipes)
// define the subscriptions route
router.use('/subscriptions', subscriptions)
router.use('/purchases', purchases)
router.use('/ingredients', ingredients)
router.use('/favorites', favorites)
module.exports = router
