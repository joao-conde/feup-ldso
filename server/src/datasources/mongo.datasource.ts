import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', {optional: true})
    dsConfig: object,
  ) {
    super(dsConfig);
  }
}
