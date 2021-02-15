var express = require('express')
var router = express.Router()
const ingredients = [
  { title: 'Яйца', dimension: 'шт.' },
  { title: 'Мука', dimension: 'гр.' },
  { title: 'Вода', dimension: 'мл.' },
  { title: 'Оливки', dimension: 'шт.' },
  { title: 'Карамель', dimension: 'мл.' },
  { title: 'Сыр', dimension: 'гр.' },
  { title: 'Сахар', dimension: 'гр.' },
  { title: 'Соль', dimension: 'гр.' },
  { title: 'Крахмал', dimension: 'гр.' },
  { title: 'Ягоды', dimension: 'гр.' },
  { title: 'Дрожжи', dimension: 'гр.' },
  { title: 'Молоко', dimension: 'мл.' },
  { title: 'Сироп', dimension: 'мл.' },
  { title: 'Майонез', dimension: 'мл.' },
  { title: 'Сливки', dimension: 'мл.' },
  { title: 'Оливковое масло', dimension: 'мл.' },
]


router.get('/', function (req, res) {
  const { query } = req.query
  if (!query) { return res.json(ingredients) }
  const ingredientsFiltered = ingredients.filter(ingredient => {
    return ingredient.title.toUpperCase().indexOf(query.toUpperCase()) > -1
  })
  return res.json(ingredientsFiltered)
})

module.exports = router
