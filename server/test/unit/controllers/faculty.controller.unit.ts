import {createStubInstance, sinon, expect} from '@loopback/testlab';

import {FacultyController} from '../../../src/controllers';
import {FacultyRepository} from '../../../src/repositories';

describe('FacultyController', () => {
  let facultyRepo: FacultyRepository;
  let controller: FacultyController;

  let count: sinon.SinonStub;
  let findById: sinon.SinonStub;
  let findOne: sinon.SinonStub;

  beforeEach(() => {
    facultyRepo = createStubInstance(FacultyRepository);

    count = facultyRepo.count as sinon.SinonStub;
    findById = facultyRepo.findById as sinon.SinonStub;
    findOne = facultyRepo.findOne as sinon.SinonStub;

    controller = new FacultyController(facultyRepo);
  });

  describe('GET /faculties/count', () => {
    it('invokes count() function associated', async () => {
      await controller.count();

      sinon.assert.called(count);
    });
  });

  describe('GET /faculties/{language}/{name}/future', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyFutureProspects('en', 'faup');

      sinon.assert.called(findOne);
      sinon.assert.notCalled(findById);
    });

    it('retrieves the future prospects of a specific faculty (faup, english)', async () => {
      findOne
        .withArgs({
          where: {name: 'faup', language: 'en'},
          fields: {id: true},
        })
        .returns({id: 1});

      findById.withArgs(1, {fields: {future_prospects: true}}).returns({
        future_prospects: {
          banner: 'banner_image.jpg',
          content: 'Future prospects content',
        },
      });

      await controller.findFacultyFutureProspects('en', 'faup');

      sinon.assert.called(findOne);
      expect(findById.getCalls().length).to.equal(1);
    });
  });

  describe('GET /faculties/{language}/{name}/videos', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyFutureProspects('en', 'faup');

      sinon.assert.called(findOne);
      sinon.assert.notCalled(findById);
    });

    it('retrieves the videos of a specific faculty (faup, english)', async () => {
      findOne
        .withArgs({
          where: {name: 'faup', language: 'en'},
          fields: {id: true},
        })
        .returns({id: 1});

      findById.withArgs(1, {fields: {videos: true}}).returns({id: 1});

      await controller.findFacultyFutureProspects('en', 'faup');

      sinon.assert.called(findOne);
      expect(findById.getCalls().length).to.equal(1);
    });
  });
});
