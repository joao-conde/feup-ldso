import {
    //actions
    getProjects,
    getProjectDetails,
    addProject,
    editProject,
    deleteProject,
    resetProjects,
    //types
    GET_PROJECTS_EN,
    GET_PROJECTS_PT,
    GET_PROJECT_BY_ID,
    ADD_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    RESET_PROJECTS
} from '../src/actions/projectsActions';


describe('Project actions', () => {

    it('should create an action to get projects', () => {
		
        const expectedActionEN = {
            type: GET_PROJECTS_EN,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/en/feup/social-projects-short'
                }
            }
        };

        const expectedActionPT = {
            type: GET_PROJECTS_PT,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/pt/feup/social-projects-short'
                }	
            }
        };
		
        expect(getProjects('feup', 'en')).toEqual(expectedActionEN);
        expect(getProjects('feup', 'pt')).toEqual(expectedActionPT);
    });


    it('should create an action to get project details', () => {

        const projectID = 69;

        const expectedActionEN = {
            type: GET_PROJECT_BY_ID,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/en/feup/social-projects?id=' + projectID
                }
            }
        };

        const expectedActionPT = {
            type: GET_PROJECT_BY_ID,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/pt/feup/social-projects?id=' + projectID
                }
            }
        };

        expect(getProjectDetails('feup', 'en', projectID)).toEqual(expectedActionEN);
        expect(getProjectDetails('feup', 'pt', projectID)).toEqual(expectedActionPT);
    });

    it('should create an action to add a project', () => {

        const projectToAdd = {
            titleEN: 'TitleEN',
            titlePT: 'TítuloPT',
            descriptionEN: 'DescriptionEN',
            descriptionPT: 'DescriptionPT',
            contentEN: 'ContentEN',
            contentPT: 'ContentPT',
            startDate: '17/10/2015',
            endDate: '17/10/2016',
            images: ['ImagePath']
        };

        const expectedAction = {
            type: ADD_PROJECT,
            payload: {
                request: {
                    type: 'POST',
                    url: '/faculties/feup/social-projects',
                    data: projectToAdd	
                }
            }
        };
        expect(addProject('feup', projectToAdd)).toEqual(expectedAction);
    });
	
    it('should create an action to edit a project', () =>{

        const projectID = 69;

        const projectToEdit = {
            titleEN: 'TitleEN',
            titlePT: 'TítuloPT',
            descriptionEN: 'DescriptionEN',
            descriptionPT: 'DescriptionPT',
            contentEN: 'ContentEN',
            contentPT: 'ContentPT',
            startDate: '17/10/2015',
            endDate: '17/10/2016',
            images: ['ImagePath']
        };

        const expectedActionEN = {
            type: EDIT_PROJECT,
            payload: {
                request: {
                    type: 'PATCH',
                    url: '/faculties/en/feup/social-projects?id=' + projectID,
                    data: projectToEdit
                }
            }
        };

        const expectedActionPT = {
            type: EDIT_PROJECT,
            payload: {
                request: {
                    type: 'PATCH',
                    url: '/faculties/pt/feup/social-projects?id=' + projectID,
                    data: projectToEdit
                }
            }
        };

        expect(editProject('feup', 'en', projectID, projectToEdit)).toEqual(expectedActionEN);
        expect(editProject('feup', 'pt', projectID, projectToEdit)).toEqual(expectedActionPT);
    });

    it('should create an action to delete a project', () =>{

        const projectID = 69;

        const expectedAction = {
            type: DELETE_PROJECT,
            payload: {
                request: {
                    type: 'DELETE',
                    url: '/faculties/social-projects?id=' + projectID
                }
            }
        };
        expect(deleteProject(projectID)).toEqual(expectedAction);
    });


    it('should create an action to reset projects', () =>{

        const expectedAction = {
            type: RESET_PROJECTS,
        };
        expect(resetProjects()).toEqual(expectedAction);
    });

});