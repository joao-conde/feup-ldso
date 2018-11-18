import {DefaultCrudRepository} from '@loopback/repository';
import {SocialProject} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SocialProjectRepository extends DefaultCrudRepository<
  SocialProject,
  typeof SocialProject.prototype.id
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(SocialProject, dataSource);
  }
}
