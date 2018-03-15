const router = require('express').Router()
const { Op } = require('sequelize')
const { Passage } = require('../db/models')

// GET /api/passages/ [Op.or]: [{authorId: 12}, {authorId: 13}]
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

module.exports = router
