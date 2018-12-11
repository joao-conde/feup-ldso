import {
    //actions
    login,
    logout,
    //types
    LOGIN,
    LOGOUT
} from '../authenticationActions';


describe('Authentication actions', () => {

    it('should create an action to login', () =>{
		
        const username = 'username123';
        const password = 'password123';
        const expectedAction = {
            type: LOGIN,
            payload: {
                request: {
                    type: 'POST',
                    url: '/login',
                    data: {
                        username: username,
                        password: password
                    }
                }
            }
        };

        expect(login(username, password)).toEqual(expectedAction);
    });
	

    it('should create an action to logout', () =>{
		
        const expectedAction = {
            type: LOGOUT
        };

        expect(logout()).toEqual(expectedAction);
    });

});