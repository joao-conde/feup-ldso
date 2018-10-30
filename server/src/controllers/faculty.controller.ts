import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Faculty} from '../models';
import {FacultyRepository} from '../repositories';

export class FacultyController {
  constructor(
    @repository(FacultyRepository) public facultyRepository: FacultyRepository,
  ) {}

  @get('/faculties/count', {
    responses: {
      '200': {
        description: 'Faculty model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Faculty)) where?: Where,
  ): Promise<Count> {
    return await this.facultyRepository.count(where);
  }

  @get('/faculties/{language}/{name}/intro', {
    responses: {
      '200': {
        description: 'Faculty introduction',
        content: {'application/json': {'x-ts-type': Faculty}},
      },
    },
  })
  async findFacultyIntro(
    @param.path.string('language') language: string, 
    @param.path.string('name') name: string):
  Promise<Faculty> {
    let id = 0;
      await this.facultyRepository
        .findOne({
          where: {name: name, language: language},
          fields: {id: true},
        })
        .then(function(result) {
          if (result != null) id = result.id;
        })
        .catch(function(err) {});
      return await this.facultyRepository.findById(id, {fields: {short_description: true}});
  }
}
