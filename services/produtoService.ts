import ProdutoRepository from "../repository/produtoRepository";

class ProdutoService {
  getFiltered(product) {
    return ProdutoRepository.find(product);
  }

  getBySlug(slug) {
    return ProdutoRepository.find({ prodslug: slug });
  }

  create(product) {
    return ProdutoRepository.create(product);
  }

  delete(_id) {
    return ProdutoRepository.findByIdAndRemove(_id);
  }
}

export default new ProdutoService();
