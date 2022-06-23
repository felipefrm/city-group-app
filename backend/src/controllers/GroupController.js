const runQuery = require("../database/runQuery");

class GroupController {
  async index(req, res) {
    const rows = await runQuery('SELECT * FROM tbl_group WHERE userId = ?', [1])

    const groupPromise = rows.map(async row => {
      let cities = await runQuery(`SELECT * FROM tbl_city WHERE id IN (${row.citiesId})`)

      return {
        id: row.id,
        name: row.name,
        userId: row.userId,
        cities
      }
    })

    const group = await Promise.all(groupPromise);

    return res.status(200).json(group)
  }

  async show(req, res) {
    const groupId = req.params.id;

    if (!Number(groupId)) {
      return res.json({ error: 'Invalid Identifier.' })
    }

    const rows = await runQuery('SELECT * FROM tbl_group WHERE userId = ? AND id = ?', [1, groupId])

    if (!rows.length) {
      return res.json({})
    }

    const group = rows[0]

    const cities = await runQuery(`SELECT * FROM tbl_city WHERE id IN (${group.citiesId})`)

    return res.status(200).json({
      id: group.id,
      name: group.name,
      userId: group.userId,
      cities: cities
    })
  }

  async create(req, res) {
    const { userId } = req
    const { name, cities } = req.body;

    if (cities.find(item => !Number(item)) !== undefined) {
      return res.json({ error: 'Invalid city identifier.' })
    }

    await runQuery(
      'INSERT INTO tbl_group(name, userId, citiesId) VALUES (?,?,?)',
      [name, userId, cities.toString()]
    )

    return res.status(201).send()
  }

  async remove(req, res) {
    const groupId = req.params.id;

    if (!Number(groupId)) {
      return res.json({ error: 'Invalid Identifier.' })
    }

    await runQuery('DELETE FROM tbl_group WHERE id = ?', [groupId])

    return res.status(200).send()
  }
}

module.exports = GroupController;