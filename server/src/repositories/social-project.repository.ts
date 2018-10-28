import {
    DefaultCrudRepository,
    juggler,
    BelongsToAccessor,
    repository,
  } from '@loopback/repository';
  import {SocialProject, Faculty} from '../models';
  import {MongoDataSource} from '../datasources';
  import {inject, Getter} from '@loopback/core';
  import {FacultyRepository} from './faculty.repository';
  
  export class SocialProjectRepository extends DefaultCrudRepository<
    SocialProject,
    typeof SocialProject.prototype.id
  > {
    public readonly faculty: BelongsToAccessor<
      Faculty,
      typeof SocialProject.prototype.id
    >;
  
    constructor(
      @inject('datasources.mongo') dataSource: MongoDataSource,
      @repository.getter('FacultyRepository')
      protected facultyRepositoryGetter: Getter<FacultyRepository>,
    ) {
      super(SocialProject, dataSource);
      this.faculty = this._createBelongsToAccessorFor(
        'facultyId',
        facultyRepositoryGetter,
      );
    }
  }
  