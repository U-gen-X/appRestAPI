const mysql = require("mysql");

// koneksi database
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_restapi",
});

conn.connect((err) => {
    if (err) throw err;
    console.log("MYSQL berhasil terkoneksi");
});

module.exports = conn;
