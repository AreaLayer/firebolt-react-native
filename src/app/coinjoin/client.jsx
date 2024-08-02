import { Client } from '/../client';
const {
    IBaseAPIOptions,
    IBaseAPIResponse,
    IBaseAPIResponseSuccess,
    IBaseAPIResponseFailure,
} = require('./types');

export class BaseAPI {
    constructor(client) {
        this.client = client;
    }
}

export default BaseAPI;

export { Client };

export {
    IBaseAPIOptions,
    IBaseAPIResponse,
    IBaseAPIResponseSuccess,
    IBaseAPIResponseFailure,
};

