import { writeFileSync, existsSync, mkdirSync } from 'fs'

const directoryToSave = './translations';

// Function to save data to JSON file
function saveToFile(data: any, lang: string) {
    // create directory if it doesn't exist
    if (!existsSync(directoryToSave)) {
        mkdirSync(directoryToSave);
    }
    writeFileSync(`${directoryToSave}/${lang}.json`, JSON.stringify(data[lang], null, 2));
}

export const saveTranslations = (spreadSheets: Record<string, any>) => {
    // Save the data for each language found in the keys of the transformed data
    Object.keys(spreadSheets).forEach(lang => {
        saveToFile(spreadSheets, lang);
    });

    console.log("Files saved:");
    console.log(Object.keys(spreadSheets).map(lang => `${lang}.json`).join(', '));
}
