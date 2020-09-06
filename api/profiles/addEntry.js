
//import Cors from 'cors'

// Initializing the cors middleware
/*
const cors = Cors({
  methods: ['GET', 'HEAD'],
})
*/
const db = require('../../lib/db')
const escape = require('sql-template-strings')
/*
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
*/
module.exports = async (req, res) => {
  // Run the middleware
  //await runMiddleware(req, res, cors)

  // Rest of the API logic
  await db.query(escape`
	  INSERT
	  INTO    compPostInfo
	          (type, percent, amount, title, explanation, date)
	  VALUES  (${req.params.type}, ${req.params.percent}, ${req.params.amount}, ${req.params.title}, ${req.params.explanation}, ${req.params.date})
   `)
  const newTable = await db.query(escape`
      SELECT *
      FROM compPostInfo
    `)
  res.status(200).json(newTable)
}
