var express = require('express')
var router = express.Router()
let purchases = [
  {
    title: 'Французские булочки',
    id: 1
  }, {
    title: 'Пончики',
    id: 2
  }, {
    title: 'Тирамису',
    id: 3
  }, {
    title: 'Вок',
    id: 4
  }, {
    title: 'Крендельки',
    id: 5
  }, {
    title: 'Начос',
    id: 6
  }, {
    title: 'Оливье',
    id: 7
  }
]


router.get('/', function (req, res) {
  res.json(purchases)
})

router.delete('/:id', function (req, res) {
  const { id } = req.params
  const shouldDelete = purchases.find(item => Number(item.id) === Number(id))
  if (!shouldDelete) {
    return res.status(404).send({ success: false, error: 'not found', purchases })
  }
  purchases = purchases.filter(item => Number(item.id) !== Number(id))
  res.json({ purchases, success: true })
})

router.post('/', function (req, res) {
  const { id } = req.body
  if (!id) {
    return res.json({ error: 'id needed', success: false })
  }
  const shouldAdd = purchases.find(item => Number(item.id) === Number(id))
  if (shouldAdd) {
    return res.json({ message: 'already added', purchases, success: true })
  }
  purchases = purchases.concat({ id: Number(id) })
  res.json({ success: true, purchases })
})

router.get(`/:id`, function (req, res) {
  const { id } = req.params
  if (!id) {
    return res.json({ error: 'id needed', success: false })
  }
  const purchase = purchases.find(item => Number(item.id) === Number(id))
  if (!purchase) {
    return res.status(404).json({ message: 'not found', success: false })
  }
  res.json({ success: true, purchase })
})

module.exports = router
