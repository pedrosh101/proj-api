import * as mongoose from "mongoose";
import ProdutoSchema from "../models/produtoSchema";

export default mongoose.model("produto", ProdutoSchema);
