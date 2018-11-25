// ACTIONS
// Get Projects
export const GET_STATS = 'web/projects/GET_STATS';
export const GET_STATS_SUCCESS = 'web/projects/GET_STATS_SUCCESS';
export const GET_STATS_FAIL = 'web/projects/GET_STATS_FAIL';
// Edit Project
export const EDIT_STATS = 'web/projects/EDIT_STATS';
export const EDIT_STATS_SUCCESS = 'web/projects/EDIT_STATS_SUCCESS';
export const EDIT_STATS_FAIL = 'web/projects/EDIT_STATS_FAIL';

export function getStats(faculty) {
    return {
        type: GET_STATS,
        payload: {
            request: {
                type: 'GET',
                url: `/faculties/en/${faculty}/statistics`
            }
        }
    };
}

export function editProject(faculty, stats) {
    return {
        type: EDIT_STATS,
        payload: {
            request: {
                type: 'PATCH',
                url: `/faculties/en/${faculty}/statistics`,
                data: stats
            }
        }
    };
}
