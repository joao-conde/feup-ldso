import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Faculty, SocialProject} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {SocialProjectRepository} from './social-project.repository';

export class FacultyRepository extends DefaultCrudRepository<
  Faculty,
  typeof Faculty.prototype.id
> {
  public readonly socialProjects: HasManyRepositoryFactory<
    SocialProject,
    typeof Faculty.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter(SocialProjectRepository)
    protected socialProjectRepositoryGetter: Getter<SocialProjectRepository>,
  ) {
    super(Faculty, dataSource);
    this.socialProjects = this._createHasManyRepositoryFactoryFor(
      'socialProjects',
      socialProjectRepositoryGetter,
    );
  }
}
