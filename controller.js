"use strict";

const response = require("./res");
const connection = require("./koneksi");

exports.index = function (req, res) {
    response.ok("Aplikasi Rest API berjalan", res);
};

// menampilkan semua data mahasiswa
exports.tampilsemuadata = function (req, res) {
    connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// menampilkan semua data berdasarkan id
exports.tampildataid = function (req, res) {
    let id = req.params.id;
    connection.query(
        "SELECT * FROM mahasiswa WHERE id_mhs = ?",
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
};

// menambahkan data mahasiswa
exports.tambahdata = function (req, res) {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query(
        "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)",
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oke("Data berhasil ditambahkan", res);
            }
        }
    );
};
