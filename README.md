#### Install

```
 npm install i18n-google-sheets --save-dev
```

#### Google spreadsheet example

_Sheet named "controls"_
| key   | en    | es    |
| ----- | ----- | ----- |
| ready | ready | listo |
---

_Sheet named "root" (or "all")_
| key | en  | es  |
| --- | --- | --- |
| yes | yes | si  |
---

Both sheets will be fetched and processed into the following files:

_en.json_
```
{
    "controls": {
        "ready": "ready"
    },
    "yes": "yes"
}
```
_es.json_
  
```
{
    "controls": {
        "ready": "listo"
    },
    "yes": "si"
}
```


#### Google API Credentials

Create an API key or service account with API key on [google cloud](https://console.cloud.google.com/)

[Enable](https://console.cloud.google.com/apis/library/sheets.googleapis.com) the google sheets API for your project

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