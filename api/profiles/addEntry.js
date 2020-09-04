const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  await db.query(escape`
	  INSERT
	  INTO    compPostInfo
	          (type, percent, amount, title, explanation, date)
	  VALUES  (${req.query.type}, ${req.query.percent}, ${req.query.amount}, ${req.query.title}, ${req.query.explanation}, ${req.query.date})
   `)
}
