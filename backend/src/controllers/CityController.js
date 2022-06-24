const runQuery = require("../database/runQuery")

class CityController {
  async index(req, res) {
    const cities = await runQuery('SELECT * FROM tbl_city')
    return res.status(200).json(cities)
  }
}

module.exports = CityController