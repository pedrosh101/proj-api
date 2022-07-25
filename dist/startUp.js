"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./infra/db");
const produtoController_1 = require("./controller/produtoController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1" });
        });
        this.app.route("/api/v1/produto").get(produtoController_1.default.getFiltered);
        this.app.route("/api/v1/produto/:slug").get(produtoController_1.default.getBySlug);
        this.app.route("/api/v1/produto").post(produtoController_1.default.create);
        this.app.route("/api/v1/produto/:id").delete(produtoController_1.default.delete);
    }
}
exports.default = new StartUp();
