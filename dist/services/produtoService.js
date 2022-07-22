"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtoRepository_1 = require("../repository/produtoRepository");
class ProdutoService {
    get() {
        return produtoRepository_1.default.find({});
    }
    getById(_id) {
        return produtoRepository_1.default.findById(_id);
    }
    create(produto) {
        return produtoRepository_1.default.create(produto);
    }
    update(_id, produto) {
        return produtoRepository_1.default.findByIdAndUpdate(_id, produto);
    }
    delete(_id) {
        return produtoRepository_1.default.findByIdAndRemove(_id);
    }
    getBySlug(slug) {
        return produtoRepository_1.default.find({ prodslug: slug });
    }
}
exports.default = new ProdutoService();
