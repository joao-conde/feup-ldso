// ACTIONS
// Get Videos
export const GET_VIDEOS_EN = 'web/videos/GET_VIDEOS_EN';
export const GET_VIDEOS_EN_SUCCESS = 'web/videos/GET_VIDEOS_EN_SUCCESS';
export const GET_VIDEOS_EN_FAIL = 'web/videos/GET_VIDEOS_EN_FAIL';
export const GET_VIDEOS_PT = 'web/videos/GET_VIDEOS_PT';
export const GET_VIDEOS_PT_SUCCESS = 'web/videos/GET_VIDEOS_PT_SUCCESS';
export const GET_VIDEOS_PT_FAIL = 'web/videos/GET_VIDEOS_PT_FAIL';
// Edit Video
export const EDIT_VIDEO = 'web/videos/EDIT_VIDEO';
export const EDIT_VIDEO_SUCCESS = 'web/videos/EDIT_VIDEO_SUCCESS';
export const EDIT_VIDEO_FAIL = 'web/videos/EDIT_VIDEO_FAIL';

export function getVideos(faculty, language) {
    return {
        type: language === 'en'? GET_VIDEOS_EN : GET_VIDEOS_PT,
        payload: {
            request: {
                type: 'GET',
                url: `/faculties/${language}/${faculty}/videos`
            }
        }
    };
}

export function editVideo(faculty, language, videos) {
    return {
        type: EDIT_VIDEO,
        payload: {
            request: {
                type: 'PATCH',
                url: `/faculties/${language}/${faculty}/videos`,
                data: videos
            }
        }
    };
}
