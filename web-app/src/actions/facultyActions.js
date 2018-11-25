// ACTIONS
export const SET_FACULTY = 'web/faculty/SET_FACULTY';

export function setFaculty(faculty) {
    return {
        type: SET_FACULTY,
        name: faculty
    };
}
