import { google } from "googleapis";
import { getGoogleAuth } from "./auth";

const spreadsheetId = process.env.SPREADSHEET_ID;

const sheets = google.sheets({
    version: "v4",
    auth: getGoogleAuth(),
});

export type TransformedSheet = { values: Array<string[]>, title: string }

export async function getSpreadsheetData(): Promise<TransformedSheet[]> {
    if (!spreadsheetId) return [];

    const ranges = await sheets.spreadsheets.get({
        spreadsheetId,
    }).then(({ data }) => data.sheets?.map((sheet) => sheet.properties?.title));

    if (!ranges) return [];

    const requests = (ranges.filter(Boolean) as string[])
        .map((range: string) => (sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        })));

    const res = await Promise.all(requests);

    return res.map((r) => ({
        values: r.data.values,
        title: r.data.range?.split('!')[0] || '',
    })).filter<TransformedSheet>(isNotNullable);
}

export type TRawSheet = { values: any[][] | null | undefined, title: string }

function isNotNullable(sheet: TRawSheet): sheet is NonNullable<TransformedSheet>  {
    return Boolean(sheet.values);
}
