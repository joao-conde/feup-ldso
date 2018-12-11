import { NotificationManager } from 'react-notifications';
import{
    GET_PROSPECTS_EN,
    GET_PROSPECTS_EN_SUCCESS,
    GET_PROSPECTS_EN_FAIL,
    GET_PROSPECTS_PT,
    GET_PROSPECTS_PT_SUCCESS,
    GET_PROSPECTS_PT_FAIL,
    EDIT_PROSPECTS,
    EDIT_PROSPECTS_SUCCESS,
    EDIT_PROSPECTS_FAIL
} from '../../actions/prospectsActions';

const initialState = {
    loading: false,
    loadingAction: false,
    contentEN: '',
    contentPT: '',
    banner: ''
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
    case GET_PROSPECTS_EN:
    case GET_PROSPECTS_PT:
        return{ ...state,
            loading: true
        };
    case EDIT_PROSPECTS:
        return{ ...state,
            loadingAction: true
        };

    case GET_PROSPECTS_EN_SUCCESS:
        return{ ...state,
            loading: false,
            contentEN: action.payload.data.future_prospects.content,
            banner: action.payload.data.future_prospects.banner
        };
    case GET_PROSPECTS_PT_SUCCESS:
        return{ ...state,
            loading: false,
            contentPT: action.payload.data.future_prospects.content,
            banner: action.payload.data.future_prospects.banner
        };
    case EDIT_PROSPECTS_SUCCESS: {
        return editProspects(state, action.payload.data.language, action.payload.data.future_prospects);
    }

    case GET_PROSPECTS_EN_FAIL:
    case GET_PROSPECTS_PT_FAIL:
        return { ...state,
            loading: false,
            error: 'Error while fetching prospects data'
        };

    case EDIT_PROSPECTS_FAIL:
        if(!global.__TEST__) NotificationManager.error('Failed to edit future plans.');
        return { ...state,
            loadingAction: false,
            error: 'Error while executing action on prospect'
        };

    default:
        return state;
    }
}

const editProspects = (state, language, editedProspect) => {
    if (language === 'en') {
        if (!global.__TEST__) NotificationManager.success('Successfully edited future plans!');
        return {
            ...state,
            loadingAction: false,
            contentEN: editedProspect.content,
            banner: editedProspect.banner
        };
    } else {
        return {
            ...state,
            loadingAction: false,
            contentPT: editedProspect.content,
            banner: editedProspect.banner
        };
    }
};