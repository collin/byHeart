const Sequelize = require('sequelize')
const db = require('../db')


const Passage = db.define('passage', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  isPublic: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Passage.prototype.preview = function (length) {
  return this.content.slice(0, length)
}

module.exports = Passage

/**
 * instanceMethods
 */

