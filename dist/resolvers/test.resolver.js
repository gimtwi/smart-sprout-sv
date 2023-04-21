"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestResolver = void 0;
const type_graphql_1 = require("type-graphql");
const centralProcessingFile_1 = require("../entities/centralProcessingFile");
const test_type_1 = require("../entities/types/test.type");
let TestResolver = class TestResolver {
    async findAllTests() {
        return centralProcessingFile_1.TestModel.find();
    }
    async addTest(input) {
        const test = await centralProcessingFile_1.TestModel.create({
            ...input,
        });
        return test;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [test_type_1.TestType])
], TestResolver.prototype, "findAllTests", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => test_type_1.TestType),
    __param(0, (0, type_graphql_1.Arg)("input"))
], TestResolver.prototype, "addTest", null);
TestResolver = __decorate([
    (0, type_graphql_1.Resolver)(test_type_1.TestType)
], TestResolver);
exports.TestResolver = TestResolver;
