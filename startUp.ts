import * as express from "express";
import * as bodyParser from "body-parser";

import Database from "./infra/db";
import ProdutoController from "./controller/produtoController";

class StartUp {
  public app: express.Application;
  private _db: Database;

  constructor() {
    this.app = express();
    this._db = new Database();
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

    this.app.route("/api/v1/produto").get(ProdutoController.getFiltered);
    this.app.route("/api/v1/produto/:slug").get(ProdutoController.getBySlug);
    this.app.route("/api/v1/produto").post(ProdutoController.create);
    this.app.route("/api/v1/produto/:id").delete(ProdutoController.delete);
  }
}

export default new StartUp();
