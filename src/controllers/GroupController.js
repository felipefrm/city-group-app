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

    return res.json(group)
  }

  async show(req, res) {
    const groupId = req.params.id;

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
    const body = req.body;

    await runQuery(
      'INSERT INTO tbl_group(name, userId, citiesId) VALUES (?,?,?)',
      [body.name, 1, body.cities.toString()]
    )

    return res.status(201).send()
  }

  async remove(req, res) {
    const groupId = req.params.id;

    await runQuery('DELETE FROM tbl_group WHERE id = ?', [groupId])

    return res.status(200).send()
  }
}

module.exports = GroupController;