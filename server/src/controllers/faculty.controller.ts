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
}
