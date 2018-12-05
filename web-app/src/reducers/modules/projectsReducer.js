import { NotificationManager } from 'react-notifications';
import {
    GET_PROJECTS_EN,
    GET_PROJECTS_EN_SUCCESS,
    GET_PROJECTS_EN_FAIL,
    GET_PROJECTS_PT,
    GET_PROJECTS_PT_SUCCESS,
    GET_PROJECTS_PT_FAIL,
    GET_PROJECT_BY_ID,
    ADD_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    GET_PROJECT_BY_ID_FAIL,
    ADD_PROJECT_FAIL,
    EDIT_PROJECT_FAIL,
    DELETE_PROJECT_FAIL,
    GET_PROJECT_BY_ID_SUCCESS,
    ADD_PROJECT_SUCCESS,
    EDIT_PROJECT_SUCCESS,
    DELETE_PROJECT_SUCCESS,
    RESET_PROJECTS,
} from '../../actions/projectsActions';

const initialState = {
    loading: false,
    loadingAction: false,
    projectsEN: [],
    projectsPT: [],
    currProjEN: null,
    currProjPT: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_PROJECTS_EN:
    case GET_PROJECTS_PT:
    case GET_PROJECT_BY_ID:
        return { ...state,
            loading: true
        };
    case ADD_PROJECT:
    case EDIT_PROJECT:
    case DELETE_PROJECT:
        return { ...state,
            loadingAction: true
        };
    case RESET_PROJECTS:
        return initialState;

    case GET_PROJECTS_EN_SUCCESS:
        return { ...state,
            loading: false,
            projectsEN: action.payload.data
        };
    case GET_PROJECTS_PT_SUCCESS:
        return { ...state,
            loading: false,
            projectsPT: action.payload.data
        };
    case GET_PROJECT_BY_ID_SUCCESS: {
        const projectByID = action.payload.data[0];
        return { ...state,
            loading: false,
            currProjEN: projectByID.language === 'en'? projectByID : state.currProjEN,
            currProjPT: projectByID.language === 'pt'? projectByID : state.currProjPT
        };
    }
    case ADD_PROJECT_SUCCESS: {
        return addProjects(state, action.payload.data);
    }
    case EDIT_PROJECT_SUCCESS: {
        return editProject(state, action.payload.data);
    }
    case DELETE_PROJECT_SUCCESS: {
        return deleteProject(state);
    }

    case GET_PROJECTS_EN_FAIL:
    case GET_PROJECTS_PT_FAIL:
    case GET_PROJECT_BY_ID_FAIL:
        return { ...state,
            loading: false,
            error: 'Error while fetching projects data'
        };
    case ADD_PROJECT_FAIL:
        if(!global.__TEST__) NotificationManager.error('Failed to add info');
        /* falls through */
    case EDIT_PROJECT_FAIL:
    case DELETE_PROJECT_FAIL:
        return { ...state,
            loadingAction: false,
            error: 'Error while executing action on project'
        };
    default:
        return state;
    }
}

const editProject = (state, editedProject) => {
    // Find project's index
    const editedIdx = state.projectsEN.findIndex(
        el => state.currProjEN.id === el.id
    );
    
    if(!global.__TEST__) NotificationManager.success('Successfully edited project!');
    if (editedProject.language === 'en') {
        let prevProps = [...state.projectsEN];
        prevProps[editedIdx] = editedProject;

        return {
            ...state,
            loadingAction: false,
            projectsEN: prevProps,
            currProjEN: editedProject
        };
    } else {
        let prevProps = [...state.projectsPT];
        prevProps[editedIdx] = editedProject;

        return {
            ...state,
            loadingAction: false,
            projectsPT: prevProps,
            currProjPT: editedProject
        };
    }
};

const addProjects = (state, newProjects) => {
    if(!global.__TEST__) NotificationManager.success('Successfully added new project!');
    return { ...state,
        loadingAction: false,
        projectsEN: [newProjects[0], ...state.projectsEN],
        projectsPT: [newProjects[1], ...state.projectsPT],
        currProjEN: newProjects[0],
        currProjPT: newProjects[1]
    };
};

const deleteProject = (state) => {
    let enIdx = state.projectsEN.findIndex((el) => el.id === state.currProjEN.id);
    
    if (enIdx >= 0) {
        let newProjectsEN = [...state.projectsEN];
        newProjectsEN.splice( enIdx, 1 );

        return { ...state,
            loadingAction: false,
            projectsEN: newProjectsEN,
            currProjEN: null
        };
    } else {
        let ptIdx = state.projectsPT.findIndex((el) => el.id === state.currProjPT.id);
        let newProjectsPT = [...state.projectsPT];
        newProjectsPT.splice( ptIdx, 1 );

        return { ...state,
            loadingAction: false,
            projectsPT: newProjectsPT,
            currProjPT: null
        };
    }
};