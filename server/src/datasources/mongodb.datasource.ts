import {inject} from '@loopback/core';
import {juggler, AnyObject} from '@loopback/repository';
const config = require('./mongodb.datasource.json');

export class MongodbDataSource extends juggler.DataSource {
  static dataSourceName = 'mongodb';

  constructor(
    @inject('datasources.config.mongodb', {optional: true})
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig);
  }
}
