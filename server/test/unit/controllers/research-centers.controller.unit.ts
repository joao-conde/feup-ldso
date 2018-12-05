import {createStubInstance, sinon, expect} from '@loopback/testlab';

import {FacultyResearchCenterController} from '../../../src/controllers';
import {ResearchCenterRepository} from '../../../src/repositories';

describe('FacultyResearchCenterController', () => {
  let researchCenterRepo: ResearchCenterRepository;
  let controller: FacultyResearchCenterController;

  let find: sinon.SinonStub;

  beforeEach(() => {
    researchCenterRepo = createStubInstance(ResearchCenterRepository);

    find = researchCenterRepo.find as sinon.SinonStub;

    controller = new FacultyResearchCenterController(researchCenterRepo);
  });

  describe('GET /faculties/{language}/{name}/research-centers', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyCenters('en', 'faup');

      sinon.assert.called(find);
    });

    it('retrieves the research centers of a specific faculty (faup, english)', async () => {
      const model = [
        {
          title: 'EN LIAAC',
          full_name: 'Stuff laboratory',
          content:
            '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
          images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
          ],
        },
        {
          title: 'EN LIAAC at FAUP',
          full_name: 'Stuff laboratory',
          content:
            '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
          images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
          ],
        },
        {
          title: 'EN LIAAC Third',
          full_name: 'Stuff laboratory',
          content:
            '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
          images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
          ],
        },
      ];

      find
        .withArgs({
          where: {name: 'faup', language: 'en'},
        })
        .returns(model);

      find.resolves(model);

      const result = await controller.findFacultyCenters('en', 'faup');
      sinon.assert.called(find);
      expect(find.getCalls().length).to.equal(1);
      expect(result.length).to.equal(3);
      expect(result).equal(model);
    });
  });

  describe('GET /faculties/{language}/{name}/research-centers-short', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyCenters('en', 'faup');

      sinon.assert.called(find);
    });

    it('retrieves the short version of the research centers of a specific faculty (faup, english)', async () => {
      const model = [
        {
          title: 'EN LIAAC',
          full_name: 'Stuff laboratory',
          images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
          ],
        },
        {
          title: 'EN LIAAC at FAUP',
          full_name: 'Stuff laboratory',
          images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
          ],
        },
        {
          title: 'EN LIAAC Third',
          full_name: 'Stuff laboratory',
          images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
          ],
        },
      ];

      find
        .withArgs({
          where: {name: 'faup', language: 'en'},
        })
        .returns(model);

      find.resolves(model);

      const result = await controller.findFacultyCenters('en', 'faup');
      sinon.assert.called(find);
      expect(find.getCalls().length).to.equal(1);
      expect(result.length).to.equal(3);
      expect(result).equal(model);
    });
  });
});
