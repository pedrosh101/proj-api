import ProdutoRepository from "../repository/produtoRepository";

class ProdutoService {
  get() {
    return ProdutoRepository.find({});
  }

  getById(_id) {
    return ProdutoRepository.findById(_id);
  }

  create(produto) {
    return ProdutoRepository.create(produto);
  }

  update(_id, produto) {
    return ProdutoRepository.findByIdAndUpdate(_id, produto);
  }

  delete(_id) {
    return ProdutoRepository.findByIdAndRemove(_id);
  }

  getBySlug(slug) {
    return ProdutoRepository.find({ prodslug: slug });
}
}

export default new ProdutoService();
