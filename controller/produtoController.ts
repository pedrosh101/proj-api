import ProdutoService from "../services/produtoService";
import slugify from "slugify";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class ProdutoController {
  get(req, res) {
    ProdutoService.get()
      .then((produto) => Helper.sendResponse(res, HttpStatus.OK, produto))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    ProdutoService.getById(_id)
      .then((produto) => Helper.sendResponse(res, HttpStatus.OK, produto))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let produto = req.body;

    ProdutoService.create(produto)
      .then((produto) =>
        Helper.sendResponse(res, HttpStatus.OK, "Produto cadastrado")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let produto = req.body;

    ProdutoService.update(_id, produto)
      .then((produto) =>
        Helper.sendResponse(res, HttpStatus.OK, "Produto cadastrado")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    ProdutoService.delete(_id)
      .then(() => Helper.sendResponse(res, HttpStatus.OK, "Produto cadastrado"))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getBySlug(req, res) {
    const slug = req.params.slug;
    ProdutoService.getBySlug(slug)
      .then((product) => Helper.sendResponse(res, HttpStatus.OK, product))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}

export default new ProdutoController();
