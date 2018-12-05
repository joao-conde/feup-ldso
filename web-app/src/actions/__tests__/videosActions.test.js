import {
    //actions
    getVideos,
    editVideo,
    //types
    GET_VIDEOS_EN,
    GET_VIDEOS_PT,
    EDIT_VIDEO
} from '../videosActions';


describe('Video actions', () => {

    it('should create an action to get videos', () =>{

        const expectedActionEN = {
            type: GET_VIDEOS_EN,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/en/feup/videos'
                }
            }
        };

        const expectedActionPT = {
            type: GET_VIDEOS_PT,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/pt/feup/videos'
                }
            }
        };

        expect(getVideos('feup', 'en')).toEqual(expectedActionEN);
        expect(getVideos('feup', 'pt')).toEqual(expectedActionPT);
    });

    it('should create an action to edit a video', () =>{

        const videoToEdit = 'https://www.youtube.com/test';

        const expectedAction = {
            type: EDIT_VIDEO,
            payload: {
                request: {
                    type: 'PATCH',
                    url: '/faculties/en/feup/videos',
                    data: videoToEdit
                }
            }
        };
        expect(editVideo('feup', 'en', videoToEdit)).toEqual(expectedAction);
    });


});
