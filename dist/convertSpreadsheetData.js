"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSpreadsheetData = void 0;
const rootSections = new Set(['all', 'root']);
function convertSpreadsheetData(data) {
    const result = {};
    data.forEach(item => {
        const section = item.title;
        const keys = item.values[0];
        item.values.slice(1).forEach(value => {
            keys.forEach((key, index) => {
                if (index > 0) { // skip the first 'key' column
                    if (!result[key]) {
                        result[key] = {};
                    }
                    const translation = value[index];
                    if (rootSections.has(section)) {
                        result[key][value[0]] = translation;
                    }
                    else {
                        if (!result[key][section]) {
                            result[key][section] = {};
                        }
                        result[key][section][value[0]] = translation;
                    }
                }
            });
        });
    });
    return result;
}
exports.convertSpreadsheetData = convertSpreadsheetData;
