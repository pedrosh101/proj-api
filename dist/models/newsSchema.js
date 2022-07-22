"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema({
    produto: { type: String },
    marca: { type: String },
    vendedor: { type: String },
    faixadepreco: { type: Number },
    active: { type: Boolean }
});
exports.default = NewsSchema;
