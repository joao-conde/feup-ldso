import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Faculty, SocialProject, Statistics} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {SocialProjectRepository} from './social-project.repository';
import {StatisticsRepository} from './statistics.repository';

export class FacultyRepository extends DefaultCrudRepository<
  Faculty,
  typeof Faculty.prototype.id
> {
  public readonly socialProjects: HasManyRepositoryFactory<
    SocialProject,
    typeof Faculty.prototype.id
  >;

  public readonly statistics: HasManyRepositoryFactory<
    Statistics,
    typeof Faculty.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter(SocialProjectRepository)
    protected socialProjectRepositoryGetter: Getter<SocialProjectRepository>,
    @repository.getter(StatisticsRepository)
    protected statisticsRepositoryGetter: Getter<StatisticsRepository>,
  ) {
    super(Faculty, dataSource);
    this.socialProjects = this._createHasManyRepositoryFactoryFor(
      'socialProjects',
      socialProjectRepositoryGetter,
    );
    this.statistics = this._createHasManyRepositoryFactoryFor(
      'statistics',
      statisticsRepositoryGetter,
    );
  }
}
