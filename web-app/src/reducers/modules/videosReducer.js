import {
    GET_VIDEOS,
    ADD_VIDEO,
    DELETE_VIDEO,
    GET_VIDEOS_SUCCESS,
    ADD_VIDEO_SUCCESS,
    DELETE_VIDEO_SUCCESS,
    GET_VIDEOS_FAIL,
    ADD_VIDEO_FAIL,
    DELETE_VIDEO_FAIL
} from '../../actions/videosActions';

const initialState = {
    videos: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_VIDEOS:
    case ADD_VIDEO:
    case DELETE_VIDEO:
        return { ...state,
            loading: true
        };

    case GET_VIDEOS_SUCCESS:
        return { ...state,
            loading: false,
            videos: action.payload.data
        };
    case ADD_VIDEO_SUCCESS:
        return { ...state,
            loading: false,
            // Falta adicionar array
        };
    case DELETE_VIDEO_SUCCESS:
        return { ...state,
            loading: false,
            // Remover do array
        };

    case GET_VIDEOS_FAIL:
    case ADD_VIDEO_FAIL:
    case DELETE_VIDEO_FAIL:
        return { ...state,
            loading: false,
            error: 'Error while fetching videos data'
        };
    default:
        return state;
    }
}