import {
    //actions
    getVideos,
    addVideo,
    deleteVideo,
    //types
    GET_VIDEOS,
    ADD_VIDEO,
    DELETE_VIDEO
} from '../src/actions/videosActions';


describe('Video actions', () => {

    it('should create an action to get videos', () =>{

        const expectedAction = {
            type: GET_VIDEOS,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/en/feup/videos'
                }
            }
        };
        expect(getVideos('feup')).toEqual(expectedAction);
    });
	
    it('should create an action to add a video', () =>{

        const videoToAdd = 'https://www.youtube.com/test';

        const expectedAction = {
            type: ADD_VIDEO,
            payload: {
                request: {
                    type: 'POST',
                    url: '/faculties/en/feup/videos',
                    data: videoToAdd
                }
            }
        };
        expect(addVideo('feup', videoToAdd)).toEqual(expectedAction);
    });
	
    it('should create an action to delete a video', () =>{
		
        const videoID = 69;

        const expectedAction = {
            type: DELETE_VIDEO,
            payload: {
                request: {
                    type: 'DELETE',
                    url: '/faculties/en/feup/videos?filter[where][id]=' + videoID
                }
            }
        };
		
        expect(deleteVideo('feup', videoID)).toEqual(expectedAction);
    });

});