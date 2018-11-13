import {repository} from '@loopback/repository';
import {StatisticsRepository, FacultyRepository} from '../repositories';
import {get, param} from '@loopback/rest';
import {Statistics} from '../models';

export class FacultyStatisticsController {
  constructor(
    @repository(StatisticsRepository) protected statsRepo: StatisticsRepository,
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
    let faculty = await this.facultyRepo.findOne({
      where: {name: name, language: language},
      fields: {id: true},
    });

    if (faculty != null) id = faculty.id;

    return await this.statsRepo.find({where: {facultyId: id}});
  }
}
