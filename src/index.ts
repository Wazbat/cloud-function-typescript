import 'source-map-support/register';
import { HttpFunction, EventFunction, EventFunctionWithCallback } from '@google-cloud/functions-framework/build/src/functions';

// req and res are Express request and response objects https://expressjs.com/en/api.html
export const exampleHttpFunction: HttpFunction = async (req, res) => {
      
    res.status(200).send(`Hello world!`);
};



// If you wish to use a callback, use the EventFunctionWithCallback type instead
// https://cloud.google.com/functions/docs/calling/pubsub
export const exampleEventFunction: EventFunction = async (message, context) => {
    // @ts-ignore
    if (!message || !message.data) throw new Error('Missing data property on message')
    // @ts-ignore
    // https://cloud.google.com/functions/docs/calling/pubsub#sample_code
    const data = Buffer.from(message.data, 'base64').toString();

  return data;
};
