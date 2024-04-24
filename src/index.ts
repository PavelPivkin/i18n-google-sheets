#!/usr/bin/env node
import { getSpreadsheetData } from "./getSpreadsheetData";
import { convertSpreadsheetData } from './convertSpreadsheetData'
import { saveTranslations } from './saveTranslations'

export async function main() {
    const sheetsData = await getSpreadsheetData();
    const transformedData = await convertSpreadsheetData(sheetsData);

    saveTranslations(transformedData);
}

main();
