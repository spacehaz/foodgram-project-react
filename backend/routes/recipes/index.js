var express = require('express')
var router = express.Router()
const items = [
  {
    creator: 'Вероника Чернова',
    id: 1,
    title: 'Французские тосты',
    tags: ['Завтрак', 'Обед', 'Ужин'],
    timeMin: 20,
    ingredients: [
      {
        title: 'Яйцо',
        amount: '2',
        dimension: 'шт'
      },
      {
        title: 'Яйцо',
        amount: '2',
        dimension: 'шт'
      }
    ]
  }
]


router.get('/', function (req, res) {
  res.json(items)
})

router.post('/', function (req, res) {
  res.send('item created')
})

module.exports = router
