// Actions
// Set Faculty
const SET_FACULTY = 'mobile/faculty/SET_FACULTY';
const CLEAR_FACULTY = 'mobile/faculty/CLEAR_FACULTY';
// Get Faculty Introduction
const GET_STATS = 'mobile/faculty/GET_STATS';
const GET_STATS_SUCCESS = 'mobile/faculty/GET_STATS_SUCCESS';
const GET_STATS_FAIL = 'mobile/faculty/GET_STATS_FAIL';
// Get Faculty Social Projects
const GET_SOCIAL_PROJECTS = 'mobile/faculty/GET_SOCIAL_PROJECTS';
const GET_SOCIAL_PROJECTS_SUCCESS = 'mobile/faculty/GET_SOCIAL_PROJECTS_SUCCESS';
const GET_SOCIAL_PROJECTS_FAIL = 'mobile/faculty/GET_SOCIAL_PROJECTS_FAIL';
// Get Faculty Social Project by ID
const GET_SOCIAL_PROJECT_BY_ID = 'mobile/faculty/GET_SOCIAL_PROJECT_BY_ID';
const GET_SOCIAL_PROJECT_BY_ID_SUCCESS = 'mobile/faculty/GET_SOCIAL_PROJECT_BY_ID_SUCCESS';
const GET_SOCIAL_PROJECT_BY_ID_FAIL = 'mobile/faculty/GET_SOCIAL_PROJECT_BY_ID_FAIL';
// Get Research Centres
const GET_RESEARCH_CENTRES = 'mobile/faculty/GET_RESEARCH_CENTRES';
const GET_RESEARCH_CENTRES_SUCCESS = 'mobile/faculty/GET_RESEARCH_CENTRES_SUCCESS';
const GET_RESEARCH_CENTRES_FAIL = 'mobile/faculty/GET_RESEARCH_CENTRES_FAIL';
// Get Research Centre by ID
const GET_RESEARCH_CENTRE_BY_ID = 'mobile/faculty/GET_RESEARCH_CENTRE_BY_ID';
const GET_RESEARCH_CENTRE_BY_ID_SUCCESS = 'mobile/faculty/GET_RESEARCH_CENTRE_BY_ID_SUCCESS';
const GET_RESEARCH_CENTRE_BY_ID_FAIL = 'mobile/faculty/GET_RESEARCH_CENTRE_BY_ID_FAIL';
// Get Faculty Future Prospects
const GET_FUTURE_PROSPECTS = 'mobile/faculty/GET_FUTURE_PROSPECTS';
const GET_FUTURE_PROSPECTS_SUCCESS = 'mobile/faculty/GET_FUTURE_PROSPECTS_SUCCESS';
const GET_FUTURE_PROSPECTS_FAIL = 'mobile/faculty/GET_FUTURE_PROSPECTS_FAIL';
// Get Faculty Localization
const GET_LOCALIZATION = 'mobile/faculty/GET_LOCALIZATION';
const GET_LOCALIZATION_SUCCESS = 'mobile/faculty/GET_LOCALIZATION_SUCCESS';
const GET_LOCALIZATION_FAIL = 'mobile/faculty/GET_LOCALIZATION_FAIL';
// Get Faculty Videos
const GET_VIDEOS = 'mobile/faculty/GET_VIDEOS';
const GET_VIDEOS_SUCCESS = 'mobile/faculty/GET_VIDEOS_SUCCESS';
const GET_VIDEOS_FAIL = 'mobile/faculty/GET_VIDEOS_FAIL';

const initialState = {
    loading: false,
    name: '',
    stats: {},
    socialProjects: [],
    currSocialProject: null,
    researchCentres: [],
    currResearchCentre: null,
    futureProspects: {},
    localization: null,
    videos: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case SET_FACULTY:
        return { ...state,
            name: action.name
        };
    case CLEAR_FACULTY:
        return initialState;

    case GET_STATS:
    case GET_SOCIAL_PROJECTS:
    case GET_SOCIAL_PROJECT_BY_ID:
    case GET_RESEARCH_CENTRES:
    case GET_RESEARCH_CENTRE_BY_ID:
    case GET_FUTURE_PROSPECTS:
    case GET_LOCALIZATION:
    case GET_VIDEOS:
        return { ...state,
            loading: true
        };

    case GET_STATS_SUCCESS:
        return { ...state,
            loading: false,
            stats: action.payload.data[0]
        };
    case GET_SOCIAL_PROJECTS_SUCCESS:
        return { ...state,
            loading: false,
            socialProjects: action.payload.data
        };
    case GET_SOCIAL_PROJECT_BY_ID_SUCCESS:
        return { ...state,
            loading: false,
            currSocialProject: action.payload.data[0]
        };
    case GET_RESEARCH_CENTRES_SUCCESS:
        return { ...state,
            loading: false,
            researchCentres: action.payload.data
        };
    case GET_RESEARCH_CENTRE_BY_ID_SUCCESS:
        return { ...state,
            loading: false,
            currResearchCentre: action.payload.data[0]
        };
    case GET_FUTURE_PROSPECTS_SUCCESS:
        return { ...state,
            loading: false,
            futureProspects: action.payload.data.future_prospects
        };
    case GET_LOCALIZATION_SUCCESS:
        return { ...state,
            loading: false,
            localization: action.payload.data
        };
    case GET_VIDEOS_SUCCESS:
        return { ...state,
            loading: false,
            videos: action.payload.data.videos
        };

    case GET_STATS_FAIL:
    case GET_SOCIAL_PROJECTS_FAIL:
    case GET_SOCIAL_PROJECT_BY_ID_FAIL:
    case GET_RESEARCH_CENTRES_FAIL:
    case GET_RESEARCH_CENTRE_BY_ID_FAIL:
    case GET_FUTURE_PROSPECTS_FAIL:
    case GET_LOCALIZATION_FAIL:
    case GET_VIDEOS_FAIL:
        return {
            ...state,
            loading: false,
            error: 'Error while fetching faculty data'
        };
    default:
        return state;
    }
}

export function setFaculty(name) {
    return {
        type: SET_FACULTY,
        name: name
    };
}

export function clearFaculty() {
    return {
        type: CLEAR_FACULTY
    };
}

export function getStats(language, faculty) {
    return {
        type: GET_STATS,
        payload: {
            request: {
                url: `/faculties/${language}/${faculty}/statistics`
            }
        }
    };
}

export function getSocialProjects(language, faculty) {
    return {
        type: GET_SOCIAL_PROJECTS,
        payload: {
            request: {
                url: `/faculties/${language}/${faculty}/social-projects-short`
            }
        }
    };
}

export function getSocialProjectDetails(language, faculty, id) {
    return {
        type: GET_SOCIAL_PROJECT_BY_ID,
        payload: {
            request: {
                url: `/faculties/${language}/${faculty}/social-projects?filter[where][id]=${id}`
            }
        }
    };
}

export function getResearchCentres(language, faculty) {
    return {
        type: GET_RESEARCH_CENTRES,
        payload: {
            request: {
                url: `/faculties/${language}/${faculty}/research-centers-short`
            }
        }
    };
}

export function getResearchCentreDetails(language, faculty, id) {
    return {
        type: GET_RESEARCH_CENTRE_BY_ID,
        payload: {
            request: {
                url: `/faculties/${language}/${faculty}/research-centers?id=${id}`
            }
        }
    };
}

export function getFutureProspects(language, faculty) {
    return {
        type: GET_FUTURE_PROSPECTS,
        payload: {
            request: {
                url: `/faculties/${language}/${faculty}/future`
            }
        }
    };
}

export function getLocalization(faculty) {
    return {
        type: GET_LOCALIZATION,
        payload: {
            request: {
                url: `/${faculty}`
            }
        }
    };
}

export function getVideos(faculty) {
    return {
        type: GET_VIDEOS,
        payload: {
            request: {
                url: `/faculties/en/${faculty}/videos`
            }
        }
    };
}