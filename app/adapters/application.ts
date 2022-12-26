import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    namespace = 'api';

    urlForFindAll(modelName: any, snapshot: any) {
        let baseUrl = this.buildURL(modelName);
        return `${baseUrl}.json`;
    }
}
