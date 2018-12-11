import { NotificationManager } from 'react-notifications';
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../../actions/authenticationActions';
import {
    EDIT_PROJECT_FAIL,
    DELETE_PROJECT_FAIL,
    ADD_PROJECT_FAIL
} from '../../actions/projectsActions';
import {
    EDIT_PROSPECTS_FAIL
} from '../../actions/prospectsActions';
import {
    EDIT_VIDEO_FAIL
} from '../../actions/videosActions';

const initialState = {
    loading: false,
    authenticated: localStorage.getItem('iupToken') !== null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN:
        return {
            ...state,
            loading: true
        };
    case LOGIN_SUCCESS: {
        return login(state, action.payload.data);
    }
    case LOGIN_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload.data.error
        };
    case LOGOUT: {
        return logout(state);
    }

    case EDIT_PROSPECTS_FAIL:
    case EDIT_VIDEO_FAIL:
    case ADD_PROJECT_FAIL:
    case DELETE_PROJECT_FAIL:
    case EDIT_PROJECT_FAIL: {
        let auth = true;
        if (action.payload.error.status === 401) {
            localStorage.removeItem('iupToken');
            auth = false;
        }

        return { ...state,
            authenticated: auth
        };
    }
    default:
        return state;
    }
}

const login = (state, response) => {
    const { token, error } = response;
    let authenticated = false;

    if (token === null && error !== '') {
        if (!global.__TEST__) NotificationManager.error(error);
    }
    else {
        localStorage.setItem('iupToken', token);
        if (!global.__TEST__) NotificationManager.success('Welcome back!');
        authenticated = true;
    }

    return {
        ...state,
        loading: false,
        authenticated: authenticated
    };
};

const logout = (state) => {
    localStorage.removeItem('iupToken');

    return {
        ...state,
        authenticated: false
    };
};