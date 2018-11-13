import {repository} from '@loopback/repository';
import {ResearchCenterRepository} from '../repositories';
import {get, param} from '@loopback/rest';
import {ResearchCenter} from '../models';

export class FacultyResearchCenterController {
  constructor(
    @repository(ResearchCenterRepository)
    protected researchCenterRepo: ResearchCenterRepository,
  ) {}

  @get('/faculties/{language}/{name}/research-centers', {
    responses: {
      '200': {
        description: 'Array of Research Centers from a Faculty',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ResearchCenter}},
          },
        },
      },
    },
  })
  async findFacultyCenters(
    @param.path.string('name') name: string,
    @param.path.string('language') language: string,
    @param.query.string('id') id?: string,
  ): Promise<ResearchCenter[]> {
    return await this.researchCenterRepo.find({
      where: {language: language, faculty: name, id: id},
    });
  }

  @get('/faculties/{language}/{name}/research-centers-short', {
    responses: {
      '200': {
        description: 'Array of Research Centers from a Faculty (short version)',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ResearchCenter}},
          },
        },
      },
    },
  })
  async findFacultyCentersShort(
    @param.path.string('name') name: string,
    @param.path.string('language') language: string,
  ): Promise<ResearchCenter[]> {
    return await this.researchCenterRepo.find({
      where: {language: language, faculty: name},
      fields: {id: true, title: true, full_name: true, images: true},
    });
  }
}
