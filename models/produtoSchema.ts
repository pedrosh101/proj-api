import * as mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
  produto: { type: String },
  marca: { type: String },
  vendedor: { type: String },
  faixadepreco: { type: Number },
  slug: { type: String }
});

export default ProdutoSchema;