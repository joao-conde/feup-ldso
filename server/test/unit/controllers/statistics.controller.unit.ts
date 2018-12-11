import {createStubInstance, sinon, expect} from '@loopback/testlab';

import {FacultyStatisticsController} from '../../../src/controllers';
import {StatisticsRepository} from '../../../src/repositories';

describe('FacultyStatisticsController', () => {
  let statsRepo: StatisticsRepository;
  let controller: FacultyStatisticsController;

  let find: sinon.SinonStub;

  beforeEach(() => {
    statsRepo = createStubInstance(StatisticsRepository);

    find = statsRepo.find as sinon.SinonStub;

    controller = new FacultyStatisticsController(statsRepo);
  });

  describe('GET /faculties/{language}/{name}/statistics', () => {
    it('invokes correct find helper function', async () => {
      await controller.findFacultyStatistics('en', 'faup');

      sinon.assert.called(find);
    });

    it('retrieves the statistics of a specific faculty (faup, english)', async () => {
      const model = [
        {
          nr_bsc: 13,
          bsc_students: 2221,
          nr_msc: 28,
          msc_students: 961,
          nr_phd: 8,
          phd_students: 280,
          nr_training_course: 125,
          training_course_graduate: 111,
          research_perc: 0.9,
          foreign_student_perc: 0.06,
          training_programs_perc: 0.18,
          other_facts: [
            '240 internship protocols with companies',
            '30 service providing projects contracts',
            '17 protocols with middle and high schools',
            '30 legal translation and revision projects',
            '8 fundraisers',
          ],
        },
      ];
      find
        .withArgs({
          where: {name: 'faup', language: 'en'},
        })
        .returns(model);

      find.resolves(model);

      const result = await controller.findFacultyStatistics('en', 'faup');
      sinon.assert.called(find);
      expect(find.getCalls().length).to.equal(1);
      expect(result.length).to.equal(1);
      expect(result).equal(model);
    });
  });
});
