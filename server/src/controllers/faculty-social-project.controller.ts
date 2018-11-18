import {repository} from '@loopback/repository';
import {SocialProjectRepository} from '../repositories';
import {del, get, patch, post, param, requestBody} from '@loopback/rest';
import {SocialProject} from '../models';

export class FacultySocialProjectController {
  constructor(
    @repository(SocialProjectRepository)
    protected socialRepo: SocialProjectRepository,
  ) {}

  @get('/faculties/{language}/{name}/social-projects', {
    responses: {
      '200': {
        description: 'Array of Social Projects from a Faculty',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': SocialProject}},
          },
        },
      },
    },
  })
  async findFacultyProjects(
    @param.path.string('name') name: string,
    @param.path.string('language') language: string,
    @param.query.string('id') id?: string,
  ): Promise<SocialProject[]> {
    return await this.socialRepo.find({
      where: {language: language, faculty: name, id: id},
    });
  }

  @patch('/faculties/{language}/{name}/social-projects', {
    responses: {
      '200': {
        description: 'Faculty.SocialProject PATCH success',
      },
    },
  })
  async patch(
    @param.path.string('language') language: string,
    @param.path.string('name') name: string,
    @requestBody() socialProject: Partial<SocialProject>,
    @param.query.string('id') id?: string,
  ): Promise<void> {
    await this.socialRepo.updateById(id, socialProject);
  }

  @get('/faculties/{language}/{name}/social-projects-short', {
    responses: {
      '200': {
        description: 'Array of Social Projects from a Faculty',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': SocialProject}},
          },
        },
      },
    },
  })
  async findFacultyProjectsShort(
    @param.path.string('name') name: string,
    @param.path.string('language') language: string,
  ): Promise<SocialProject[]> {
    return await this.socialRepo.find({
      where: {language: language, faculty: name},
      fields: {id: true, title: true, short_description: true, images: true},
    });
  }

  @post('/faculties/{language}/{name}/social-projects', {
    responses: {
      '200': {
        description: 'Faculty.SocialProject instance',
        content: {'application/json': {'x-ts-type': SocialProject}},
      },
    },
  })
  async createSocialProject(
    @param.path.string('language') language: string,
    @param.path.string('name') name: string,
    @requestBody() socialProject: SocialProject,
  ): Promise<SocialProject> {
    let newProject = new SocialProject(socialProject);
    newProject.faculty = name;
    newProject.language = language;

    return await this.socialRepo.create(newProject);
  }

  @del('/faculties/{language}/{name}/social-projects', {
    responses: {
      '204': {
        description: 'Faculty.SocialProject DELETE success',
      },
    },
  })
  async deleteSocialProject(
    @param.path.string('language') language: string,
    @param.path.string('name') name: string,
    @param.query.string('id') id?: string,
  ): Promise<void> {
    await this.socialRepo.deleteById(id);
  }
}
