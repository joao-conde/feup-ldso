// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const FacultyAPI = {
    faculties: [
        { number: 1, name: 'fadeup'},
        { number: 2, name: 'faup'},
        { number: 3, name: 'fbaup'},
        { number: 4, name: 'fcnaup'},
        { number: 5, name: 'fcup'},
        { number: 6, name: 'fdup'},
        { number: 7, name: 'fep'},
        { number: 8, name: 'feup'},
        { number: 9, name: 'ffup'},
        { number: 10, name: 'flup'},
        { number: 11, name: 'fmdup'},
        { number: 12, name: 'fmup'},
        { number: 13, name: 'fpceup'},
        { number: 14, name: 'icbas'},
    ],
    all: function() { return this.faculties;},
};

export default FacultyAPI;
