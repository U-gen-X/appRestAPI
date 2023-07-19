"use strict";

module.exports = function (app) {
    const jsonku = require("./controller");

    app.route("/").get(jsonku.index);

    app.route("/tampil").get(jsonku.tampilsemuadata);

    app.route("/tampil/:id").get(jsonku.tampildataid);

    app.route("/tambah").post(jsonku.tambahdata);

    app.route("/ubah").put(jsonku.editdata);

    app.route("/hapus").delete(jsonku.hapusdata);
};
