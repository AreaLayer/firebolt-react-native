import { Client } from '/../client';

export class BaseAPI {
    constructor(client: Client) {
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

