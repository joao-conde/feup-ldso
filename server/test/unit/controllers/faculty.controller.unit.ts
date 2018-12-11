import {createStubInstance, sinon, expect} from '@loopback/testlab';

import {FacultyController} from '../../../src/controllers';
import {FacultyRepository} from '../../../src/repositories';

describe('FacultyController', () => {
  let facultyRepo: FacultyRepository;
  let controller: FacultyController;

  let count: sinon.SinonStub;
  let findById: sinon.SinonStub;
  let findOne: sinon.SinonStub;
  let updateById: sinon.SinonStub;

  beforeEach(() => {
    facultyRepo = createStubInstance(FacultyRepository);

    count = facultyRepo.count as sinon.SinonStub;
    findById = facultyRepo.findById as sinon.SinonStub;
    findOne = facultyRepo.findOne as sinon.SinonStub;
    updateById = facultyRepo.updateById as sinon.SinonStub;

    controller = new FacultyController(facultyRepo);
  });

  describe('GET /faculties/count', () => {
    it('invokes count() and retrieves number of faculties', async () => {
      count.resolves(28);
      const result = await controller.count();

      sinon.assert.called(count);
      expect(result).equal(28);
    });
  });

  describe('GET /faculties/{language}/{name}/future', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyFutureProspects('en', 'faup');

      sinon.assert.called(findOne);
      sinon.assert.notCalled(findById);
    });

    it('retrieves the future prospects of a specific faculty (faup, english)', async () => {
      const model = {
        future_prospects: {
          banner: 'banner_image.jpg',
          content: 'Future prospects content',
        },
      };

      findOne
        .withArgs({
          where: {name: 'faup', language: 'en'},
          fields: {id: true},
        })
        .returns({id: 1});

      findById.withArgs(1, {fields: {future_prospects: true}}).returns(model);

      findById.resolves(model);

      const result = await controller.findFacultyFutureProspects('en', 'faup');
      sinon.assert.called(findOne);
      expect(findById.getCalls().length).to.equal(1);
      expect(result).equal(model);
    });
  });

  describe('GET /faculties/{language}/{name}/videos', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyVideos('en', 'faup');

      sinon.assert.called(findOne);
      sinon.assert.notCalled(findById);
    });

    it('retrieves the videos of a specific faculty (faup, english)', async () => {
      const model = {
        videos: ['video1', 'video2', 'video3'],
      };

      findOne
        .withArgs({
          where: {name: 'faup', language: 'en'},
          fields: {id: true},
        })
        .returns({id: 1});

      findById.withArgs(1, {fields: {videos: true}}).returns(model);

      let result = await controller.findFacultyVideos('en', 'faup');

      sinon.assert.called(findOne);
      expect(findById.getCalls().length).to.equal(1);
      expect(result).equal(model);
    });
  });

  describe('PATCH /faculties/{language}/{name}/videos', () => {
    it('invokes correct update function', async () => {
      await controller.patchVideos('en', 'faup', {
        videos: ['video1', 'video2'],
      });

      sinon.assert.called(findOne);
      sinon.assert.called(updateById);
      sinon.assert.called(findById);
    });

    it('updates the videos of a specific faculty (faup, english)', async () => {
      const newModel = {
        language: 'en',
        videos: ['video1', 'video2', 'video3'],
      };

      findOne
        .withArgs({
          where: {name: 'faup', language: 'en'},
          fields: {id: true},
        })
        .returns({id: 1});

      updateById.withArgs(1, {
        videos: ['video1', 'video2'],
      });
      findById
        .withArgs(1, {fields: {language: true, videos: true}})
        .returns(newModel);

      let result = await controller.patchVideos('en', 'faup', {
        videos: ['video1', 'video2'],
      });

      sinon.assert.called(findOne);
      expect(findById.getCalls().length).to.equal(1);
      expect(result).equal(newModel);
    });
  });

  describe('PATCH /faculties/{language}/{name}/future-prospects', () => {
    it('invokes correct update function', async () => {
      await controller.patchFutureProspects('en', 'faup', {
        future_prospects: {
          content: 'New content',
          banner: 'banner.jpg',
        },
      });

      sinon.assert.called(findOne);
      sinon.assert.called(updateById);
      sinon.assert.called(findById);
    });

    it('updates the future prospects of a specific faculty (faup, english)', async () => {
      const newModel = {
        language: 'en',
        future_prospects: {
          content: 'New content',
          banner: 'banner.jpg',
        },
      };

      findOne
        .withArgs({
          where: {name: 'faup', language: 'en'},
          fields: {id: true},
        })
        .returns({id: 1});

      updateById.withArgs(1, newModel);
      findById
        .withArgs(1, {fields: {language: true, future_prospects: true}})
        .returns(newModel);

      let result = await controller.patchFutureProspects('en', 'faup', {
        future_prospects: {
          content: 'New content',
          banner: 'banner.jpg',
        },
      });

      sinon.assert.called(findOne);
      expect(findById.getCalls().length).to.equal(1);
      expect(result).equal(newModel);
    });
  });
});
