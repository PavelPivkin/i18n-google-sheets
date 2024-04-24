const path = require('path');

import { config } from 'dotenv';
import { google, type Auth } from "googleapis";

config({ path: path.resolve(process.cwd(), '.env') });

const googleApiKey = process.env.GOOGLE_API_KEY;
const googleApplicationCredentionals = process.env.GOOGLE_APPLICATION_CREDENTIALS;

export const getGoogleAuth = (): Auth.GoogleAuth | string | undefined => {
    if (googleApplicationCredentionals) {
        return new google.auth.GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        })
    }

    return googleApiKey;
}