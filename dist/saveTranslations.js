"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTranslations = void 0;
const fs_1 = require("fs");
const directoryToSave = './translations';
// Function to save data to JSON file
function saveToFile(data, lang) {
    // create directory if it doesn't exist
    if (!(0, fs_1.existsSync)(directoryToSave)) {
        (0, fs_1.mkdirSync)(directoryToSave);
    }
    (0, fs_1.writeFileSync)(`${directoryToSave}/${lang}.json`, JSON.stringify(data[lang], null, 2));
}
const saveTranslations = (spreadSheets) => {
    // Save the data for each language found in the keys of the transformed data
    Object.keys(spreadSheets).forEach(lang => {
        saveToFile(spreadSheets, lang);
    });
    console.log("Files saved:");
    console.log(Object.keys(spreadSheets).map(lang => `${lang}.json`).join(', '));
};
exports.saveTranslations = saveTranslations;
