const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const posts = await db.query(escape`
      SELECT *
      FROM compPostInfo
      ORDER BY date DESC
    `)

  res.status(200).json({ posts})
}
