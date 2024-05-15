#### Install

```
 npm install i18n-google-sheets --save-dev
```

#### Create a .env file with the GOOGLE API CREDENTIALS

```
### If you're using a service account to access translations set the path to the credentials:
### Don't forget to give your service account at least view permission

GOOGLE_APPLICATION_CREDENTIALS='./credentionals.json'

### If you're using an API KEY set the following:
### Don't forget to share your google sheet 

GOOGLE_API_KEY=<api_key>

SPREADSHEET_ID=<spreadsheet id from url>
```

#### Run with npx
```
npx i18n-google-sheets
```


#### Run with npm
Add the following command to package.json

```
"scripts": {
    "i18n": "i18n-google-sheets"
}
```

and

```
npm run i18n
```