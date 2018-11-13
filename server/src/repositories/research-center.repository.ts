import {DefaultCrudRepository} from '@loopback/repository';
import {ResearchCenter} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ResearchCenterRepository extends DefaultCrudRepository<
  ResearchCenter,
  typeof ResearchCenter.prototype.id
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(ResearchCenter, dataSource);
  }
}
