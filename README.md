# Google Cloud Function - Typescript

This repo serves as a template for Typescript based Google Cloud Functions. Simply edit the deploy scripts and write your code inside the src folder

## Installation

Install dependancies with npm

```bash
npm install
```

## Usage

See the provided index.ts file for example http and event functions

Also be sure to change the deploy scripts in your package.json to point towards your project, as well as set the function names and trigger topics

There is a vscode launch script and tasks configured for debbuging functions

## Deploying

Configure your [Gcloud CLI](https://cloud.google.com/sdk/gcloud) then run the relevant deploy script

## Additional documentation

[Google Cloud Function Triggers](https://cloud.google.com/functions/docs/concepts/events-triggers)

[Express Documentation](https://expressjs.com/en/api.html)

## Contributing

Pull requests and issues welcome!

Made with ♥