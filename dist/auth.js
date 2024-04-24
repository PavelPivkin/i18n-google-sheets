"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleAuth = void 0;
const path = require('path');
const dotenv_1 = require("dotenv");
const googleapis_1 = require("googleapis");
(0, dotenv_1.config)({ path: path.resolve(process.cwd(), '.env') });
const googleApiKey = process.env.GOOGLE_API_KEY;
const googleApplicationCredentionals = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const getGoogleAuth = () => {
    if (googleApplicationCredentionals) {
        return new googleapis_1.google.auth.GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });
    }
    return googleApiKey;
};
exports.getGoogleAuth = getGoogleAuth;
