"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpreadsheetData = void 0;
const googleapis_1 = require("googleapis");
const auth_1 = require("./auth");
const spreadsheetId = process.env.SPREADSHEET_ID;
const sheets = googleapis_1.google.sheets({
    version: "v4",
    auth: (0, auth_1.getGoogleAuth)(),
});
async function getSpreadsheetData() {
    if (!spreadsheetId)
        return [];
    const ranges = await sheets.spreadsheets.get({
        spreadsheetId,
    }).then(({ data }) => data.sheets?.map((sheet) => sheet.properties?.title));
    if (!ranges)
        return [];
    const requests = ranges.filter(Boolean)
        .map((range) => (sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    })));
    const res = await Promise.all(requests);
    return res.map((r) => ({
        values: r.data.values,
        title: r.data.range?.split('!')[0] || '',
    })).filter(isNotNullable);
}
exports.getSpreadsheetData = getSpreadsheetData;
function isNotNullable(sheet) {
    return Boolean(sheet.values);
}
