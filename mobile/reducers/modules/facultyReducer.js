// Actions
// Set Faculty
const SET_FACULTY = 'mobile/faculty/SET_FACULTY';
const CLEAR_FACULTY = 'mobile/faculty/CLEAR_FACULTY';
// Get Faculty Introduction
const GET_INTRO = 'mobile/faculty/GET_INTRO';
const GET_INTRO_SUCCESS = 'mobile/faculty/GET_INTRO_SUCCESS';
const GET_INTRO_FAIL = 'mobile/faculty/GET_INTRO_FAIL';
// Get Faculty Social Projects
const GET_SOCIAL_PROJECTS = 'mobile/faculty/GET_SOCIAL_PROJECTS';
const GET_SOCIAL_PROJECTS_SUCCESS = 'mobile/faculty/GET_SOCIAL_PROJECTS_SUCCESS';
const GET_SOCIAL_PROJECTS_FAIL = 'mobile/faculty/GET_SOCIAL_PROJECTS_FAIL';
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
  intro: '',
  socialProjects: [],
  futureProspects: '',
  localization: {},
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

    case GET_INTRO:
    case GET_SOCIAL_PROJECTS:
    case GET_FUTURE_PROSPECTS:
    case GET_LOCALIZATION:
    case GET_VIDEOS:
      return { ...state,
        loading: true
      };

    case GET_INTRO_SUCCESS:
      return { ...state,
        loading: false,
        intro: action.payload.data.shortDescription
      };
    case GET_SOCIAL_PROJECTS_SUCCESS:
      return { ...state,
        loading: false,
        socialProjects: action.payload.data
      };
    case GET_FUTURE_PROSPECTS_SUCCESS:
      return { ...state,
        loading: false,
        futureProspects: action.payload.data['future-prospects']['content']
      };
    case GET_LOCALIZATION_SUCCESS:
      return { ...state,
        loading: false,
        localization: action.payload.data
      };
    case GET_VIDEOS_SUCCESS:
      return { ...state,
        loading: false,
        videos: action.payload.data
      };

    case GET_INTRO_FAIL:
    case GET_SOCIAL_PROJECTS_FAIL:
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

export function getIntroduction(faculty) {
  return {
    type: GET_INTRO,
    payload: {
      request: {
        url: `/${faculty}`
      }
    }
  };
}

export function getSocialProjects(faculty) {
  return {
    type: GET_SOCIAL_PROJECTS,
    payload: {
      request: {
        url: `/${faculty}`
      }
    }
  };
}

export function getFutureProspects(faculty) {
  return {
    type: GET_FUTURE_PROSPECTS,
    payload: {
      request: {
        url: `/${faculty}`
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
        url: `/${faculty}`
      }
    }
  };
}