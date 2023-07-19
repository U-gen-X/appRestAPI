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

// mengedit data mahasiswa
exports.editdata = function (req, res) {
    const id = req.body.id_mhs;
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;

    connection.query(
        "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mhs=?",
        [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data berhasil di ubah", res);
            }
        }
    );
};

// mendelete data mahasiswa
exports.hapusdata = function (req, res) {
    let id = req.body.id_mhs;

    connection.query(
        "DELETE FROM mahasiswa WHERE id_mhs=?",
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data berhasil di hapus", res);
            }
        }
    );
};

// menampilkan group matakuliah
exports.tampilgroupmatkul = function (req, res) {
    connection.query(
        "SELECT mahasiswa.id_mhs, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matkul = matakuliah.id_matkul AND krs.id_mhs = mahasiswa.id_mhs ORDER BY mahasiswa.id_mhs",
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.nested(rows, res);
            }
        }
    );
};
