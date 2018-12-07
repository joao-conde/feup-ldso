import expect from 'expect';
import reducer from '../modules/videosReducer';

import {
    GET_VIDEOS_EN,
    GET_VIDEOS_PT,
    GET_VIDEOS_EN_SUCCESS,
    GET_VIDEOS_PT_SUCCESS,
    GET_VIDEOS_EN_FAIL,
    GET_VIDEOS_PT_FAIL,
    EDIT_VIDEO,
    EDIT_VIDEO_SUCCESS,
    EDIT_VIDEO_FAIL
} from '../../actions/videosActions';


describe('Videos reducer', () => {

    it('should return the initial state', () => {

        const initialState = {
            loading: false,
            loadingAction: false,
            videosEN: {},
            videosPT: {}
        };

        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_VIDEOS_EN', () => {

        const getVideosActions = {
            type: GET_VIDEOS_EN,
        };

        const expectedState = {
            loading: true,
        };

        expect(reducer({}, getVideosActions)).toEqual(expectedState);
    });

    it('should handle GET_VIDEOS_PT', () => {

        const getVideosActions = {
            type: GET_VIDEOS_PT,
        };

        const expectedState = {
            loading: true,
        };

        expect(reducer({}, getVideosActions)).toEqual(expectedState);
    });

    it('should handle GET_VIDEOS_EN_SUCCESS', () => {

        const payloadVideosEN =
            {
                videos: [
                    'https://www.youtube.com/test',
                    'https://www.youtube.com/test'
                ]
            };

        const getVideosEnSuccessAction = {
            type: GET_VIDEOS_EN_SUCCESS,
            payload:{
                data: payloadVideosEN
            }
        };

        const expectedState = {
            loading: false,
            videosEN: payloadVideosEN
        };

        expect(reducer({}, getVideosEnSuccessAction)).toEqual(expectedState);

    });

    it('should handle GET_VIDEOS_PT_SUCCESS', () => {

        const payloadVideosPT =
            {
                videos: [
                    'https://www.youtube.com/test',
                    'https://www.youtube.com/test'
                ]
            };

        const getVideosPTSuccessAction = {
            type: GET_VIDEOS_PT_SUCCESS,
            payload:{
                data: payloadVideosPT
            }
        };

        const expectedState = {
            loading: false,
            videosPT: payloadVideosPT
        };

        expect(reducer({}, getVideosPTSuccessAction)).toEqual(expectedState);

    });

    it('should handle GET_VIDEOS_EN_FAIL', () => {

        const getVideosEnFailAction = {
            type: GET_VIDEOS_EN_FAIL
        };

        const expectedState = {
            loading: false,
            error: 'Error while fetching videos data'
        };

        expect(reducer({}, getVideosEnFailAction)).toEqual(expectedState);
    });

    it('should handle GET_VIDEOS_PT_FAIL', () => {

        const getVideosPTFailAction = {
            type: GET_VIDEOS_PT_FAIL
        };

        const expectedState = {
            loading: false,
            error: 'Error while fetching videos data'
        };

        expect(reducer({}, getVideosPTFailAction)).toEqual(expectedState);
    });


    it('should handle EDIT_VIDEO', () => {

        const editVideoAction = {
            type: EDIT_VIDEO,
        };

        const expectedState = {
            loadingAction: true,
        };

        expect(reducer({}, editVideoAction)).toEqual(expectedState);
    });

    it('should handle EDIT_VIDEO_SUCCESS', () => {

        const nonEditedVideoEN = {
            videos: [
                'https://www.youtube.com/test',
                'https://www.youtube.com/test'
            ],
            language:'en'
        };

        const nonEditedVideoPT = {
            videos: [
                'https://www.youtube.com/teste',
                'https://www.youtube.com/teste'
            ],
            language:'pt'
        };

        const editedVideoEN = {
            videos: [
                'https://www.youtube.com/test1',
                'https://www.youtube.com/test1'
            ],
            language: 'en'
        };

        const editedVideoPT = {
            videos: [
                'https://www.youtube.com/teste1',
                'https://www.youtube.com/teste1'
            ],
            language: 'pt'
        };

        const editVideoENSuccessAction = {
            type: EDIT_VIDEO_SUCCESS,
            payload:{
                data: editedVideoEN
            }
        };

        const editVideoPTSuccessAction = {
            type: EDIT_VIDEO_SUCCESS,
            payload:{
                data: editedVideoPT
            }
        };

        const previousStateEN = {
            loadingAction: true,
            videosEN: nonEditedVideoEN.videosEN,
        };

        const previousStatePT = {
            loadingAction: true,
            videosPT: nonEditedVideoPT.videosPT,
        };

        const expectedStateEN = {
            loadingAction: false,
            videosEN: editedVideoEN.videosEN
        };

        const expectedStatePT = {
            loadingAction: false,
            videosPT: editedVideoPT.videosPT
        };

        expect(reducer(previousStateEN, editVideoENSuccessAction)).toEqual(expectedStateEN);
        expect(reducer(previousStatePT, editVideoPTSuccessAction)).toEqual(expectedStatePT);

    });

    it('should handle EDIT_VIDEOS_FAIL', () => {

        const editVideosFailAction = {
            type: EDIT_VIDEO_FAIL
        };

        const expectedState = {
            loadingAction: false,
            error: 'Error while executing action on videos'
        };

        expect(reducer({}, editVideosFailAction)).toEqual(expectedState);
    });

});
