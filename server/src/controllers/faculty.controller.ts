import {Count, CountSchema, repository, Where} from '@loopback/repository';
import {
  param,
  get,
  getWhereSchemaFor,
  patch,
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

  @get('/faculties/{language}/{name}/future', {
    responses: {
      '200': {
        description: 'Faculty introduction',
        content: {'application/json': {'x-ts-type': Faculty}},
      },
    },
  })
  async findFacultyFutureProspects(
    @param.path.string('language') language: string,
    @param.path.string('name') name: string,
  ): Promise<Faculty> {
    let result = await this.facultyRepository.findOne({
      where: {name: name, language: language},
      fields: {id: true},
    });

    if (!result) return new Faculty();

    return await this.facultyRepository.findById(result.id, {
      fields: {future_prospects: true},
    });
  }

  @get('/faculties/{language}/{name}/videos', {
    responses: {
      '200': {
        description: 'Faculty introduction',
        content: {'application/json': {'x-ts-type': Faculty}},
      },
    },
  })
  async findFacultyVideos(
    @param.path.string('language') language: string,
    @param.path.string('name') name: string,
  ): Promise<Faculty> {
    let result = await this.facultyRepository.findOne({
      where: {name: name, language: language},
      fields: {id: true},
    });

    if (!result) return new Faculty();

    return await this.facultyRepository.findById(result.id, {
      fields: {videos: true},
    });
  }

  @patch('/faculties/{language}/{name}', {
    responses: {
      '200': {
        description: 'Faculty PATCH success',
      },
    },
  })
  async patch(
    @param.path.string('language') language: string,
    @param.path.string('name') name: string,
    @requestBody() faculty: Partial<Faculty>,
  ): Promise<void> {
    let id = 0;
    let result = await this.facultyRepository.findOne({
      where: {name: name, language: language},
      fields: {id: true},
    });

    if (result != null) id = result.id;

    await this.facultyRepository.updateById(id, faculty);
  }
}
