import {
    Count,
    CountSchema,
    repository,
    Filter,
    Where,
  } from '@loopback/repository';
  import {FacultyRepository} from '../repositories';
  import {
    del,
    get,
    patch,
    post,
    param,
    requestBody,
    getFilterSchemaFor,
    getWhereSchemaFor,
  } from '@loopback/rest';
  import {SocialProject, Faculty} from '../models';

  export class FacultySocialProjectController {
    constructor(
      @repository(FacultyRepository) protected facultyRepo: FacultyRepository,
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
      @param.query.object('filter', getFilterSchemaFor(SocialProject)) filter?: Filter,
    ): Promise<SocialProject[]> {
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
      return await this.facultyRepo.socialProjects(id).find(filter);
    }

    @patch('/faculties/{language}/{name}/social-projects', {
      responses: {
        '200': {
          description: 'Faculty.SocialProject PATCH success count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async patch(
      @param.path.string('language') language: string,
      @param.path.string('name') name: string,
      @requestBody() socialProject: Partial<SocialProject>,
      @param.query.object('where', getWhereSchemaFor(SocialProject))
      where?: Where,
    ): Promise<Count> {
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

      return await this.facultyRepo
        .socialProjects(id)
        .patch(socialProject, where);
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
      @param.path.string('language') language: string
    ): Promise<SocialProject[]> {
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
      return await this.facultyRepo.socialProjects(id).find({fields: {id: true, title: true, short_description: true, images: true}});
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
      @requestBody() socialProject: SocialProject): Promise<SocialProject> {
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

      //socialProject.facultyId = id;
      let newProject = new SocialProject();
      newProject.content = socialProject.content;
      newProject.title = socialProject.title;
      newProject.facultyId = id;

      return await this.facultyRepo.socialProjects(id).create(socialProject);
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
      @param.query.object('where', getWhereSchemaFor(SocialProject))
      where?: Where,): Promise<void> {

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

      await this.facultyRepo.socialProjects(id).delete(where);
    }

  }
