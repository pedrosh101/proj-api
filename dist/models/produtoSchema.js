"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ProdutoSchema = new mongoose.Schema({
    produto: { type: String },
    marca: { type: String },
    vendedor: { type: String },
    faixadepreco: { type: Number },
    prodslug: { type: String }
});
exports.default = ProdutoSchema;
