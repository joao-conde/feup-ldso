import {repository} from '@loopback/repository';
import {StatisticsRepository} from '../repositories';
import {get, param} from '@loopback/rest';
import {Statistics} from '../models';

export class FacultyStatisticsController {
  constructor(
    @repository(StatisticsRepository) protected statsRepo: StatisticsRepository
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
    return await this.statsRepo.find({where: {language: language, faculty: name}});
  }
}
