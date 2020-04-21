import 'source-map-support/register';
import * as functions from 'firebase-functions';
import * as Sentry from '@sentry/node';
import * as admin from 'firebase-admin';

import server from './server';

admin.initializeApp();

type Context = {
    admin: object;
};

const Context: Context = { admin };

Sentry.init({
    environment: process.env.NODE_ENV || 'production',
});

Sentry.configureScope((scope) => {
    scope.setTag('project', 'cloud-functions');
});

// HTTP SERVER
exports.httpServer = functions.https.onRequest(server(Context));

/************************************
    CRON JOBS             
    https://console.cloud.google.com/cloudscheduler
 ************************************/

// Daily Sync - 0 0 * * *
// exports.dailySync = functions.pubsub.topic('daily-sync').onPublish(async () => {
//     // ...do something daily
//     return true;
// });

/************************************
    TRIGGERS             
 ************************************/

// exports.triggerFunction = functions.database
//     .ref('someNode/{childNode}')
//     .onCreate(async (snapshot) => {
//         // ...do something on create
//         return true;
//     });
