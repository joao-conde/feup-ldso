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
    @repository(FacultyRepository)
    public facultyRepository : FacultyRepository,
  ) {}

  @post('/faculties', {
    responses: {
      '200': {
        description: 'Faculty model instance',
        content: {'application/json': {'x-ts-type': Faculty}},
      },
    },
  })
  async create(@requestBody() faculty: Faculty): Promise<Faculty> {
    return await this.facultyRepository.create(faculty);
  }

  @get('/faculties', {
    responses: {
      '200': {
        description: 'Array of Faculty model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Faculty}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Faculty)) filter?: Filter,
  ): Promise<Faculty[]> {
    return await this.facultyRepository.find(filter);
  }

  @get('/faculties/{language}/{id}', {
    responses: {
      '200': {
        description: 'Faculty model instance',
        content: {'application/json': {'x-ts-type': Faculty}},
      },
    },
  })
  async findById(@param.path.string('language') language: string, @param.path.string('id') id: string): Promise<Faculty> {
    return await this.facultyRepository.findOne({where: {name: id, language: language}}) || new Faculty();
  }

  @get('/faculties/{language}/{id}/intro', {
    responses: {
      '200': {
        description: 'Faculty model instance',
        content: {'application/json': {'x-ts-type': Faculty}},
      },
    },
  })
  async findIntroById(@param.path.string('language') language: string, @param.path.string('id') id: string): Promise<Faculty> {
    return await this.facultyRepository.findOne({where: {name: id, language: language}, fields: {short_description: true}}) || new Faculty();
  }
}
