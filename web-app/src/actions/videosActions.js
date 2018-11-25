// ACTIONS
// Get Videos
export const GET_VIDEOS = 'web/videos/GET_VIDEOS';
export const GET_VIDEOS_SUCCESS = 'web/videos/GET_VIDEOS_SUCCESS';
export const GET_VIDEOS_FAIL = 'web/videos/GET_VIDEOS_FAIL';
// Add Video
export const ADD_VIDEO = 'web/videos/ADD_VIDEO';
export const ADD_VIDEO_SUCCESS = 'web/videos/ADD_VIDEO_SUCCESS';
export const ADD_VIDEO_FAIL = 'web/videos/ADD_VIDEO_FAIL';
// Delete Video
export const DELETE_VIDEO = 'web/videos/DELETE_VIDEO';
export const DELETE_VIDEO_SUCCESS = 'web/videos/DELETE_VIDEO_SUCCESS';
export const DELETE_VIDEO_FAIL = 'web/videos/DELETE_VIDEO_FAIL';

export function getVideos(faculty) {
    return {
        type: GET_VIDEOS,
        payload: {
            request: {
                type: 'GET',
                url: `/faculties/en/${faculty}/videos`
            }
        }
    };
}

export function addVideo(faculty, video) {
    return {
        type: ADD_VIDEO,
        payload: {
            request: {
                type: 'POST',
                url: `/faculties/en/${faculty}/videos`,
                data: video
            }
        }
    };
}

export function deleteVideo(faculty, id) {
    return {
        type: DELETE_VIDEO,
        payload: {
            request: {
                type: 'DELETE',
                url: `/faculties/en/${faculty}/videos?filter[where][id]=${id}`
            }
        }
    };
}