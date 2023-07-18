"use strict";

const response = require("./res");
const connection = require("./koneksi");

exports.index = function (req, res) {
    response.ok("Aplikasi Rest API berjalan", res);
};

exports.tampilsemuadata = function (req, res) {
    connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};
