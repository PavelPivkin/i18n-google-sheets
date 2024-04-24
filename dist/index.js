#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const getSpreadsheetData_1 = require("./getSpreadsheetData");
const convertSpreadsheetData_1 = require("./convertSpreadsheetData");
const saveTranslations_1 = require("./saveTranslations");
async function main() {
    const sheetsData = await (0, getSpreadsheetData_1.getSpreadsheetData)();
    const transformedData = await (0, convertSpreadsheetData_1.convertSpreadsheetData)(sheetsData);
    (0, saveTranslations_1.saveTranslations)(transformedData);
}
exports.main = main;
main();
