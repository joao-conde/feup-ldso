import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Faculty} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacultyRepository extends DefaultCrudRepository<
  Faculty,
  typeof Faculty.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Faculty, dataSource);
  }
}
