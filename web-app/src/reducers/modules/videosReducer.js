import {
    GET_VIDEOS_EN,
    GET_VIDEOS_EN_SUCCESS,
    GET_VIDEOS_EN_FAIL,
    GET_VIDEOS_PT,
    GET_VIDEOS_PT_SUCCESS,
    GET_VIDEOS_PT_FAIL,
    EDIT_VIDEO,
    EDIT_VIDEO_FAIL,
    EDIT_VIDEO_SUCCESS,
} from '../../actions/videosActions';

const initialState = {
    loading: false,
    loadingAction: false,
    videosEN: {},
    videosPT: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_VIDEOS_EN:
    case GET_VIDEOS_PT:
        return { ...state,
            loading: true
        };

    case GET_VIDEOS_EN_SUCCESS:
        return { ...state,
            loading: false,
            videosEN: action.payload.data
        };
    case GET_VIDEOS_PT_SUCCESS:
        return { ...state,
            loading: false,
            videosPT: action.payload.data
        };

    case GET_VIDEOS_EN_FAIL:
    case GET_VIDEOS_PT_FAIL:
        return { ...state,
            loading: false,
            error: 'Error while fetching videos data'
        };

    case EDIT_VIDEO:
        return { ...state,
            loadingAction: true
        };
    case EDIT_VIDEO_SUCCESS: {
        return editVideo(state, action.payload.data.videos);
    }
    case EDIT_VIDEO_FAIL:
        return { ...state,
            loadingAction: false,
            error: 'Error while executing action on videos'
        };

    default:
        return state;
    }
}

const editVideo = (state, editedVideo) => {
    if (editedVideo.language === 'en') {
        return {
            ...state,
            loadingAction: false,
            videosEN: editedVideo.videos
        };
    } else {
        return {
            ...state,
            loadingAction: false,
            videosPT: editedVideo.videos
        };
    }

};
