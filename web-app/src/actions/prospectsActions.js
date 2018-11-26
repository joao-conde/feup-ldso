//ACTIONS
// Get Prospects
export const GET_PROSPECTS_EN = 'web/prospects/GET_PROSPECTS_EN';
export const GET_PROSPECTS_EN_SUCCESS = 'web/prospects/GET_PROSPECTS_EN_SUCCESS';
export const GET_PROSPECTS_EN_FAIL = 'web/prospects/GET_PROSPECTS_EN_FAIL';
export const GET_PROSPECTS_PT = 'web/prospects/GET_PROSPECTS_PT';
export const GET_PROSPECTS_PT_SUCCESS = 'web/prospects/GET_PROSPECTS_PT_SUCCESS';
export const GET_PROSPECTS_PT_FAIL = 'web/prospects/GET_PROSPECTS_PT_FAIL';

// Edit Prospects
export const EDIT_PROSPECTS = 'web/projects/EDIT_PROSPECTS';
export const EDIT_PROSPECTS_SUCCESS = 'web/projects/EDIT_PROSPECTS_SUCCESS';
export const EDIT_PROSPECTS_FAIL = 'web/projects/EDIT_PROSPECTS_FAIL';


export function getProspects(faculty, language){
    return{
        type: language === 'en' ? GET_PROSPECTS_EN : GET_PROSPECTS_PT,
        payload: {
            request: {
                type: 'GET',
                url: `/faculties/${language}/${faculty}/future`
            }
        }
    };
}


export function editProspects(faculty, language, prospect){
    return{
        type: EDIT_PROSPECTS,
        payload:{
            request: {
                type: 'PATCH',
                url: `/faculties/${language}/${faculty}/future-prospects`,
                data: prospect
            }
        }
    };
}