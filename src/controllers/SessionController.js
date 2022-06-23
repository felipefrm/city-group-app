require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const runQuery = require("../database/runQuery");

class SessionController {
  async login(req, res) {
    const result = await runQuery(
      'SELECT * FROM tbl_users WHERE username = ? AND password = ?',
      [req.body.username, req.body.password]
    )

    if (result[0]) {
      const user = result[0]

      const id = user.id;
      var token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: '24h'
      });
      res.status(200).json({ auth: true, token: token });
    }

    res.status(401).json({error: 'Invalid Login'});
  }

  logout(req, res) {
    res.json({ auth: false, token: null });
  }
}

module.exports = SessionController