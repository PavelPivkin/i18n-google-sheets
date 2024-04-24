import { TransformedSheet } from "./getSpreadsheetData";

const rootSections = new Set<string>(['all', 'root'])

export function convertSpreadsheetData(data: TransformedSheet[]): object {
    const result: Record<string, any> = {};

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
                    } else {
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
