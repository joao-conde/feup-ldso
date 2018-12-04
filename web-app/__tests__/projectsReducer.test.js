import expect from 'expect';
import reducer from '../src/reducers/modules/projectsReducer';

import {
    GET_PROJECTS_EN,
    GET_PROJECTS_PT,
    GET_PROJECT_BY_ID,
    ADD_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    RESET_PROJECTS,
    GET_PROJECTS_EN_SUCCESS,
    GET_PROJECTS_PT_SUCCESS,
    GET_PROJECT_BY_ID_SUCCESS,
    EDIT_PROJECT_SUCCESS,
    ADD_PROJECT_SUCCESS,
    DELETE_PROJECT_SUCCESS
} from '../src/actions/projectsActions';


describe('Projects reducer', () => {

    it('should return the initial state', () => {

        const initialState = {
            loading: false,
            loadingAction: false,
            projectsEN: [],
            projectsPT: [],
            currProjEN: null,
            currProjPT: null
        };

        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_PROJECTS_EN', () => {

        const getEnProjectsAction = {
            type: GET_PROJECTS_EN,
        };

        const expectedState = {
            loading: true,
        };

        expect(reducer({}, getEnProjectsAction)).toEqual(expectedState);
    });

    it('should handle GET_PROJECTS_PT', () => {

        const getPtProjectsAction = {
            type: GET_PROJECTS_PT,
        };

        const expectedState = {
            loading: true,
        };

        expect(reducer({}, getPtProjectsAction)).toEqual(expectedState);
    });


    it('should handle GET_PROJECT_BY_ID', () => {

        const getProjectByIDAction = {
            type: GET_PROJECT_BY_ID,
        };

        const expectedState = {
            loading: true,
        };

        expect(reducer({}, getProjectByIDAction)).toEqual(expectedState);
    });


    it('should handle ADD_PROJECT', () => {

        const addProjectAction = {
            type: ADD_PROJECT,
        };

        const expectedState = {
            loadingAction: true,
        };

        expect(reducer({}, addProjectAction)).toEqual(expectedState);
    });


    it('should handle EDIT_PROJECT', () => {

        const editProjectAction = {
            type: EDIT_PROJECT,
        };

        const expectedState = {
            loadingAction: true,
        };

        expect(reducer({}, editProjectAction)).toEqual(expectedState);
    });


    it('should handle DELETE_PROJECT', () => {

        const deleteProjectAction = {
            type: DELETE_PROJECT,
        };

        const expectedState = {
            loadingAction: true,
        };

        expect(reducer({}, deleteProjectAction)).toEqual(expectedState);
    });

    it('should handle RESET_PROJECTS', () => {

        const resetProjectsAction = {
            type: RESET_PROJECTS,
        };

        const expectedState = {
            loading: false,
            loadingAction: false,
            projectsEN: [],
            projectsPT: [],
            currProjEN: null,
            currProjPT: null
        };

        expect(reducer({}, resetProjectsAction)).toEqual(expectedState);
    });


    it('should handle GET_PROJECTS_EN_SUCCESS', () => {

        const payloadProjectsEN = [
            {
                id: '5bfabd66c7701a1504d35d7c',
                title: '[EN] Sed in convallis nulla',
                short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
                images: [
                    'https://dummyimage.com/600x400/000/fff',
                    'https://dummyimage.com/600x400/000/fff'
                ]
            }
        ];

        const getProjectsEnSuccessAction = {
            type: GET_PROJECTS_EN_SUCCESS,
            payload:{
                data: payloadProjectsEN
            }
        };

        const expectedState = {
            loading: false,
            projectsEN: payloadProjectsEN
        };

        expect(reducer({}, getProjectsEnSuccessAction)).toEqual(expectedState);
    });

    it('should handle GET_PROJECTS_PT_SUCCESS', () => {

        const payloadProjectsPT = [
            {
                id: '5bfabd66c7701a1504d35d7c',
                title: '[PT] Sed in convallis nulla',
                short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
                images: [
                    'https://dummyimage.com/600x400/000/fff',
                    'https://dummyimage.com/600x400/000/fff'
                ]
            }
        ];

        const getProjectsPtSuccessAction = {
            type: GET_PROJECTS_PT_SUCCESS,
            payload:{
                data: payloadProjectsPT
            }
        };

        const expectedState = {
            loading: false,
            projectsPT: payloadProjectsPT
        };

        expect(reducer({}, getProjectsPtSuccessAction)).toEqual(expectedState);
    });


    it('should handle GET_PROJECT_BY_ID_SUCCESS', () => {

        const projectEN = {
            id: '5bfabd66c7701a1504d35d7c',
            title: '[EN] English project',
            short_description: 'English project test.',
            images: [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],
            language: 'en'
        };

        const anotherProjectEN = {
            id: '5bfabd66c7701a1504d3dwad22',
            title: '[EN] Another english project',
            short_description: 'English project test.',
            images: [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],
            language: 'en'
        };

        const projectPT = {
            id: '5bfabd66c7701a1504d35d7c',
            title: '[PT] Projeto português',
            short_description: 'Projeto de teste português.',
            images: [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],
            language: 'pt'
        };

        const previousState = {
            loading: true,
            currProjEN: projectEN,
            currProjPT: projectPT
        };

        const expectedState = {
            loading: false,
            currProjEN: anotherProjectEN,
            currProjPT: projectPT
        };

        const getProjetByIDSuccessAction = {
            type: GET_PROJECT_BY_ID_SUCCESS,
            payload:{
                data: [anotherProjectEN]
            }
        };

        expect(reducer(previousState, getProjetByIDSuccessAction)).toEqual(expectedState);
    });

    it('should handle EDIT_PROJECT_SUCCESS', () => {

        const nonEditedProject = {
            id: '5bfabd66c7701a1504d35d7c',
            title: '[EN] Before Editing',
            short_description: 'Before editing test project',
            images: [
                'dummy_path1',
                'dummy_path2'
            ],
            language: 'en'
        };

        const editedProject = {
            id: '5bfabd66c7701a1504d35d7c',
            title: '[EN] After editing',
            short_description: 'After editing test project.',
            images: [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],
            language: 'en'
        };

        const editProjectSuccessAction = {
            type: EDIT_PROJECT_SUCCESS,
            payload:{
                data: editedProject
            }
        };

        const previousState = {
            projectsEN: [nonEditedProject],
            currProjEN: nonEditedProject
        };

        const expectedState = {
            loadingAction: false,
            projectsEN: [editedProject],
            currProjEN: editedProject
        };

        expect(reducer(previousState, editProjectSuccessAction)).toEqual(expectedState);
    });


    it('should handle ADD_PROJECT_SUCCESS', () => {

        const projectEN = {
            id: '5bfabd66c7701a1504d35d7c',
            title: '[EN] English project',
            short_description: 'Add Test project',
            images: [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],
            language: 'en'
        };

        const projectPT = {
            id: '5bfabd66c7701a1504d35d7c',
            title: '[PT] Projeto Portugues',
            short_description: 'Adicionar projeto de teste.',
            images: [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],
            language: 'pt'
        };

        const previousState = {
            loadingAction: true,
            projectsEN: [],
            projectsPT: [],
            currProjEN: null,
            currProjPT: null,
        };

        const expectedState = {
            loadingAction: false,
            projectsEN: [projectEN],
            projectsPT: [projectPT],
            currProjEN: projectEN,
            currProjPT: projectPT
        };

        const addProjectSuccessAction = {
            type: ADD_PROJECT_SUCCESS,
            payload:{
                data:[projectEN, projectPT]
            }
        };

        expect(reducer(previousState, addProjectSuccessAction)).toEqual(expectedState);
    });


    it('should handle DELETE_PROJECT_SUCCESS', () => {

        const project = {
            id: '5bfabd66c7701a1504d35d7c',
            title: '[EN] English project',
            short_description: 'Test project.',
            images: [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],
            language: 'en'
        };

        const previousState = {
            loadingAction: true,
            projectsEN: [project],
            currProjEN: project,
        };

        const expectedState = {
            loadingAction: false,
            projectsEN: [],
            currProjEN: null
        };

        const deleteProjectSuccessAction = {
            type: DELETE_PROJECT_SUCCESS
        };

        expect(reducer(previousState, deleteProjectSuccessAction)).toEqual(expectedState);
    });

});
