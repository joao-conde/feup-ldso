// ACTIONS
// Get Projects
export const GET_PROJECTS_EN = 'web/projects/GET_PROJECTS_EN';
export const GET_PROJECTS_EN_SUCCESS = 'web/projects/GET_PROJECTS_EN_SUCCESS';
export const GET_PROJECTS_EN_FAIL = 'web/projects/GET_PROJECTS_EN_FAIL';
export const GET_PROJECTS_PT = 'web/projects/GET_PROJECTS_PT';
export const GET_PROJECTS_PT_SUCCESS = 'web/projects/GET_PROJECTS_PT_SUCCESS';
export const GET_PROJECTS_PT_FAIL = 'web/projects/GET_PROJECTS_PT_FAIL';
// Search Projects
export const SEARCH_PROJECTS = 'web/projects/SEARCH_PROJECTS';
export const SEARCH_PROJECTS_SUCCESS = 'web/projects/SEARCH_PROJECTS_SUCCESS';
export const SEARCH_PROJECTS_FAIL = 'web/projects/SEARCH_PROJECTS_FAIL';
// Get Single Project
export const GET_PROJECT_BY_ID = 'web/projects/GET_PROJECT_BY_ID';
export const GET_PROJECT_BY_ID_SUCCESS = 'web/projects/GET_PROJECT_BY_ID_SUCCESS';
export const GET_PROJECT_BY_ID_FAIL = 'web/projects/GET_PROJECT_BY_ID_FAIL';
// Add Project
export const ADD_PROJECT = 'web/projects/ADD_PROJECT';
export const ADD_PROJECT_SUCCESS = 'web/projects/ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAIL = 'web/projects/ADD_PROJECT_FAIL';
// Edit Project
export const EDIT_PROJECT = 'web/projects/EDIT_PROJECT';
export const EDIT_PROJECT_SUCCESS = 'web/projects/EDIT_PROJECT_SUCCESS';
export const EDIT_PROJECT_FAIL = 'web/projects/EDIT_PROJECT_FAIL';
// Delete Project
export const DELETE_PROJECT = 'web/projects/DELETE_PROJECT';
export const DELETE_PROJECT_SUCCESS = 'web/projects/DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAIL = 'web/projects/DELETE_PROJECT_FAIL';
// Reset Current Projects
export const RESET_PROJECTS = 'web/projects/RESET_PROJECTS';

export function getProjects(faculty, language) {
    return {
        type: language === 'en'? GET_PROJECTS_EN : GET_PROJECTS_PT,
        payload: {
            request: {
                type: 'GET',
                url: `/faculties/${language}/${faculty}/social-projects-short`
            }
        }
    };
}

export function searchProjects(faculty, query) {
    return {
        type: SEARCH_PROJECTS,
        payload: {
            request: {
                type: 'GET',
                url: `/faculties/en/${faculty}/social-projects-short?q=${query}`
            }
        }
    }
}

export function getProjectDetails(faculty, language, id) {
    return {
        type: GET_PROJECT_BY_ID,
        payload: {
            request: {
                type: 'GET',
                url: `/faculties/${language}/${faculty}/social-projects?id=${id}`
            }
        }
    };
}

export function addProject(faculty, project) {
    return {
        type: ADD_PROJECT,
        payload: {
            request: {
                type: 'POST',
                url: `/faculties/${faculty}/social-projects`,
                data: project
            }
        }
    };
}

export function editProject(faculty, language, id, project) {
    return {
        type: EDIT_PROJECT,
        payload: {
            request: {
                type: 'PATCH',
                url: `/faculties/${language}/${faculty}/social-projects?id=${id}`,
                data: project
            }
        }
    };
}

export function deleteProject(id) {
    return {
        type: DELETE_PROJECT,
        payload: {
            request: {
                type: 'DELETE',
                url: `/faculties/social-projects?id=${id}`
            }
        }
    };
}

export function resetProjects() {
    return {
        type: RESET_PROJECTS
    };
}