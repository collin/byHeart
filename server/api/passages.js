const router = require('express').Router()
const { Op } = require('sequelize')
const { Passage } = require('../db/models')

// GET /api/passages/
router.get('/', (req, res, next) => {
  // console.log(req.user)
  const where = req.user ?
    { [Op.or]: [{authorId: req.user.id}, { isPublic: true }] } :
    { isPublic: true }
  console.log('where: ', where)

  return Passage.findAll({ where })
    .then(passages => res.json(passages))
    .catch(next)}
)

// POST /api/passages/
router.post('/', (req, res, next) => {
  Passage.create(req.body)
    .then(newPassage => res.status(201).json(newPassage))
    .catch(next)
})

module.exports = router
