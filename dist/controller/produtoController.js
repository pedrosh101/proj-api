"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtoService_1 = require("../services/produtoService");
const slugify_1 = require("slugify");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class ProdutoController {
    getFiltered(req, res) {
        var _a;
        const params = (_a = req.query) !== null && _a !== void 0 ? _a : null;
        produtoService_1.default.getFiltered(params)
            .then((produto) => helper_1.default.sendResponse(res, HttpStatus.OK, produto))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    getBySlug(req, res) {
        const slug = req.params.slug;
        produtoService_1.default.getBySlug(slug)
            .then((produto) => helper_1.default.sendResponse(res, HttpStatus.OK, produto))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let { produto, marca, vendedor, preco } = req.body;
        let prodslug = slugify_1.default(`${Date.now()} ${produto}`);
        let productinfo = { produto, marca, vendedor, preco, prodslug };
        produtoService_1.default.create(productinfo)
            .then((produto) => helper_1.default.sendResponse(res, HttpStatus.OK, "Produto cadastrado!"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        produtoService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Produto cadastrado"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new ProdutoController();
