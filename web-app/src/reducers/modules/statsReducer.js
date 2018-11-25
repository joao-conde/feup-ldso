import {
    GET_STATS,
    EDIT_STATS,
    GET_STATS_SUCCESS,
    EDIT_STATS_SUCCESS,
    GET_STATS_FAIL,
    EDIT_STATS_FAIL
} from '../../actions/statsActions';

const initialState = {
    stats: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_STATS:
    case EDIT_STATS:
        return { ...state,
            loading: true
        };

    case GET_STATS_SUCCESS:
    case EDIT_STATS_SUCCESS:
        return { ...state,
            loading: false,
            stats: action.payload.data
        };

    case GET_STATS_FAIL:
    case EDIT_STATS_FAIL:
        return { ...state,
            loading: false,
            error: 'Error while fetching projects data'
        };
    default:
        return state;
    }
}