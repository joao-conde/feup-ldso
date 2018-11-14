import {DefaultCrudRepository} from '@loopback/repository';
import {Statistics} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StatisticsRepository extends DefaultCrudRepository<
  Statistics,
  typeof Statistics.prototype.id
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(Statistics, dataSource);
  }
}
