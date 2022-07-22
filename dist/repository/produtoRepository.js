"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const produtoSchema_1 = require("../models/produtoSchema");
exports.default = mongoose.model("produto", produtoSchema_1.default);
