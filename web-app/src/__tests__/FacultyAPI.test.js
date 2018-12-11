import FacultyAPI from '../FacultyAPI';

it('Check API all', async () => {

    expect(FacultyAPI.all().length).toEqual(14);

});
