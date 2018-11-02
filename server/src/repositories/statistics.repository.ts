import {DefaultCrudRepository, juggler, BelongsToAccessor, repository} from '@loopback/repository';
import {Statistics, Faculty} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {FacultyRepository} from './faculty.repository';

export class StatisticsRepository extends DefaultCrudRepository<
  Statistics,
  typeof Statistics.prototype.id
> {
  public readonly faculty: BelongsToAccessor<
    Faculty,
    typeof Statistics.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('FacultyRepository')
    protected facultyRepositoryGetter: Getter<FacultyRepository>
  ) {
    super(Statistics, dataSource);
    this.faculty = this._createBelongsToAccessorFor(
      'facultyId',
      facultyRepositoryGetter,
    );
  }
}