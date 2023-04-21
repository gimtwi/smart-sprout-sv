"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const test_type_1 = require("./types/test.type");
exports.TestModel = (0, typegoose_1.getModelForClass)(test_type_1.TestType);
