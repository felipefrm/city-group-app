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
      return res.status(200).json({
        auth: {
          status: true,
          token
        },
        user: {
          id: user.id,
          name: user.name
        }
      });
    }

    return res.status(401).json({ error: 'Invalid Login' });
  }

  logout(req, res) {
    return res.json({
      auth: {
        status: false,
        token: null
      }
    });
  }
}

module.exports = SessionController