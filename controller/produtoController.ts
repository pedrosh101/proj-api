import ProdutoService from "../services/produtoService";
import slugify from "slugify";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class ProdutoController {
  getFiltered(req, res) {
    const params = req.query ?? null;
    ProdutoService.getFiltered(params)
      .then((produto) => Helper.sendResponse(res, HttpStatus.OK, produto))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getBySlug(req, res) {
    const slug = req.params.slug;
    ProdutoService.getBySlug(slug)
      .then((produto) => Helper.sendResponse(res, HttpStatus.OK, produto))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let { produto, marca, vendedor, preco } = req.body;
    let prodslug = slugify(`${Date.now()} ${produto}`);
    let productinfo = { produto, marca, vendedor, preco, prodslug };
    ProdutoService.create(productinfo)
      .then((produto) =>
        Helper.sendResponse(res, HttpStatus.OK, "Produto cadastrado!")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    ProdutoService.delete(_id)
      .then(() => Helper.sendResponse(res, HttpStatus.OK, "Produto cadastrado"))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}

export default new ProdutoController();
