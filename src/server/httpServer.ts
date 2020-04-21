import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import { dummyController } from './controllers';

export default (context: object) => {
    const httpServer: any = express();

    httpServer.use(cors({ origin: true }));
    httpServer.use(bodyParser.json());
    httpServer.use(morgan('combined'));

    // maps a collection routes & methods to {httpServer}
    httpServer.map = (routeObject: any, routeUrl = '') => {
        Object.keys(routeObject).forEach((route) => {
            if (Array.isArray(routeObject[route]))
                httpServer[route](routeUrl, ...routeObject[route]);
            else if (typeof routeObject[route] === 'object')
                httpServer.map(routeObject[route], routeUrl + route);
            else httpServer[route](routeUrl, routeObject[route]);
        });
    };

    const routes = {
        ...dummyController(context),
    };

    httpServer.map(routes);

    if (!module.parent) {
        httpServer.listen(3000);
    }

    return httpServer;
};
