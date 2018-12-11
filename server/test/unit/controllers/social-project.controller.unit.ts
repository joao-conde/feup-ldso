import {createStubInstance, sinon, expect} from '@loopback/testlab';

import {FacultySocialProjectController} from '../../../src/controllers';
import {SocialProjectRepository} from '../../../src/repositories';

describe('FacultySocialProjectController', () => {
  let socialRepo: SocialProjectRepository;
  let controller: FacultySocialProjectController;

  let find: sinon.SinonStub;

  beforeEach(() => {
    socialRepo = createStubInstance(SocialProjectRepository);

    find = socialRepo.find as sinon.SinonStub;

    controller = new FacultySocialProjectController(socialRepo);
  });

  describe('GET /faculties/{language}/{name}/social-projects', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyProjects('en', 'faup');

      sinon.assert.called(find);
    });

    it('retrieves the social projects of a specific faculty (faup, english)', async () => {
      const model = [
        {
          title: 'Title from project 1',
          short_description: 'Short description from project 1',
          content: 'Content from project 1',
          images: ['image 1', 'image 2', 'image 3'],
          start_date: '2018-01-01',
          end_date: '2018-12-31',
        },
        {
          title: 'Title from project 2',
          short_description: 'Short description from project 2',
          content: 'Content from project 2',
          images: ['image 1', 'image 2', 'image 3'],
          start_date: '2017-01-01',
          end_date: '2017-12-31',
        },
        {
          title: 'Title from project 3',
          short_description: 'Short description from project 3',
          content: 'Content from project 3',
          images: ['image 1', 'image 2', 'image 3'],
          start_date: '2016-01-01',
          end_date: '2016-12-31',
        },
      ];

      find
        .withArgs({
          where: {name: 'faup', language: 'en'},
        })
        .returns(model);

      find.resolves(model);

      const result = await controller.findFacultyProjects('en', 'faup');
      sinon.assert.called(find);
      expect(find.getCalls().length).to.equal(1); //1 call to 'find' to get all the projects
      expect(result.length).to.equal(3); //3 projects
      expect(result).equal(model); //projects expected are returned
    });
  });
});
