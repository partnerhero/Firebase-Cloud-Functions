import { dummyGet, dummyPost } from '../methods/dummyMethods';

const metricsController = {
    '/dummyRoute': {
        get: dummyGet,
        post: dummyPost,
    },
};

export default metricsController;
