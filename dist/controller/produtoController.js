"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtoService_1 = require("../services/produtoService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class ProdutoController {
    get(req, res) {
        produtoService_1.default.get()
            .then((produto) => helper_1.default.sendResponse(res, HttpStatus.OK, produto))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        produtoService_1.default.getById(_id)
            .then((produto) => helper_1.default.sendResponse(res, HttpStatus.OK, produto))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let produto = req.body;
        produtoService_1.default.create(produto)
            .then((produto) => helper_1.default.sendResponse(res, HttpStatus.OK, "Produto cadastrado"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let produto = req.body;
        produtoService_1.default.update(_id, produto)
            .then((produto) => helper_1.default.sendResponse(res, HttpStatus.OK, "Produto cadastrado"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        produtoService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Produto cadastrado"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    getBySlug(req, res) {
        const slug = req.params.slug;
        produtoService_1.default.getBySlug(slug)
            .then((product) => helper_1.default.sendResponse(res, HttpStatus.OK, product))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new ProdutoController();
