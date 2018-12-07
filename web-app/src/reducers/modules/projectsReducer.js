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
    SEARCH_PROJECTS,
    SEARCH_PROJECTS_SUCCESS,
    SEARCH_PROJECTS_FAIL,
} from '../../actions/projectsActions';

const initialState = {
    loading: false,
    loadingAction: false,
    /**
     * Mapping between a project in english and its correspondent in Portuguese.
     * As an object, the key is the id of the english project and the value is the
     *  id of the Portuguese object.
     */
    idsMap: {},
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
    case SEARCH_PROJECTS:
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

    case GET_PROJECTS_EN_SUCCESS: {
        return getAndMapEn(state, action.payload.data);
    }
    case GET_PROJECTS_PT_SUCCESS: {
        return getAndMapPt(state, action.payload.data);
    }
    case SEARCH_PROJECTS_SUCCESS: {
        return search(state, action.payload.data);
    }
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
    case SEARCH_PROJECTS_FAIL:
        return { ...state,
            loading: false,
            error: 'Error while fetching projects data'
        };
    case ADD_PROJECT_FAIL:
        if(!global.__TEST__) NotificationManager.error('Failed to create project');
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
    if  (!global.__TEST__) NotificationManager.success('Successfully added new project!');
    return { ...state,
        loadingAction: false,
        projectsEN: [newProjects[0], ...state.projectsEN],
        projectsPT: [newProjects[1], ...state.projectsPT],
        currProjEN: newProjects[0],
        currProjPT: newProjects[1],
        idsMap: { ...state.idsMap, [newProjects[0].id]: newProjects[1].id }
    };
};

const deleteProject = (state) => {
    let newMap = { ...state.idsMap };
    let enIdx = state.projectsEN.findIndex((el) => el.id === state.currProjEN.id);

    if (enIdx >= 0) {
        let newProjectsEN = [...state.projectsEN];
        newProjectsEN.splice( enIdx, 1 );

        delete newMap[state.currProjEN.id];

        return { ...state,
            loadingAction: false,
            projectsEN: newProjectsEN,
            currProjEN: null,
            idsMap: newMap
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

const getAndMapEn = (state, enProjects) => {
    const { projectsPT } = state;
    let newMap = {};

    if (projectsPT.length !== 0)
        for (let proj in enProjects)
            newMap[enProjects[proj].id] = projectsPT[proj].id;
    else
        for (let proj of enProjects)
            newMap[proj.id] = null;
    
    return { ...state,
        loading: false,
        projectsEN: enProjects,
        idsMap: newMap
    };
};

const getAndMapPt = (state, ptProjects) => {
    const { idsMap , projectsEN } = state;
    let newMap = { ...idsMap };

    if (projectsEN.length !== 0)
        for (let proj in ptProjects)
            newMap[projectsEN[proj].id] = ptProjects[proj].id;
    
    return { ...state,
        loading: false,
        projectsPT: ptProjects,
        idsMap: newMap
    };
};

const search = (state, enProjects) => {
    const { idsMap } = state;
    let ptProjects = [];

    for (let proj of enProjects)
        ptProjects.push({id: idsMap[proj.id]});

    return { ...state,
        loading: false,
        projectsEN: enProjects,
        projectsPT: ptProjects
    };
};