import {repository} from '@loopback/repository';
import {FacultyRepository} from '../repositories';
import {get, param} from '@loopback/rest';
import {Statistics} from '../models';

export class FacultyStatisticsController {
  constructor(
    @repository(FacultyRepository) protected facultyRepo: FacultyRepository,
  ) {}

  @get('/faculties/{language}/{name}/statistics', {
    responses: {
      '200': {
        description: 'Statistics from a Faculty',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Statistics}},
          },
        },
      },
    },
  })
  async findFacultyStatistics(
    @param.path.string('name') name: string,
    @param.path.string('language') language: string,
  ): Promise<Statistics[]> {
    let id = 0;
    await this.facultyRepo
      .findOne({
        where: {name: name, language: language},
        fields: {id: true},
      })
      .then(function(result) {
        if (result != null) id = result.id;
      })
      .catch(function(err) {});

    return await this.facultyRepo.statistics(id).find();
  }
}
