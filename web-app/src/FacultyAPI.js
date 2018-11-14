// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const FacultyAPI = {
    faculties: [
        { number: 1, name: 'FADEUP'},
        { number: 2, name: 'FAUP'},
        { number: 3, name: 'FBAUP'},
        { number: 4, name: 'FCNAUP'},
        { number: 5, name: 'FCUP'},
        { number: 6, name: 'FDUP'},
        { number: 7, name: 'FEP'},
        { number: 8, name: 'FEUP'},
        { number: 9, name: 'FFUP'},
        { number: 10, name: 'FLUP'},
        { number: 11, name: 'FMDUP'},
        { number: 12, name: 'FMUP'},
        { number: 13, name: 'FPCEUP'},
        { number: 14, name: 'ICBAS'},
    ],
    all: function() { return this.faculties;},
    /*get: function(id) {
        const isFaculty = p => p.name === id;
        return this.faculties.find(isFaculty);
    }*/
};

export default FacultyAPI;
