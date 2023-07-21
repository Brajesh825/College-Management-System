const mysql = require('mysql');

module.exports = class Mysql {
  static connect() {
    // establish connection
    const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'collegemanagementsystem',
    });
    // connect to database
    db.connect((err) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log('Mysql Connected');
    });
    return db;
  }
};
