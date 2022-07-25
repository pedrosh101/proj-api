"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtoRepository_1 = require("../repository/produtoRepository");
class ProdutoService {
    getFiltered(product) {
        return produtoRepository_1.default.find(product);
    }
    getBySlug(slug) {
        return produtoRepository_1.default.find({ prodslug: slug });
    }
    create(product) {
        return produtoRepository_1.default.create(product);
    }
    delete(_id) {
        return produtoRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new ProdutoService();
