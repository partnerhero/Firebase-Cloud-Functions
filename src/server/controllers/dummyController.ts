import { dummyGet, dummyPost } from '../methods/dummyMethods';

const metricsController = (context: object) => ({
    '/dummyRoute': {
        get: dummyGet(context),
        post: dummyPost(context),
    },
});

export default metricsController;
