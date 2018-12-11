import expect from 'expect';
import requestMiddleware from '../middleware';

const create = () => {
    const next = jest.fn();
    const invoke = action => requestMiddleware()(next)(action);
    return { next, invoke };
};

describe('Middleware tests', () => {

    it('handles no payload action', () => {
        const { next, invoke } = create();
		
        const action = {};
		
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('handles GET request action', () => {
        const { invoke } = create();
		
        const action = {
            payload: {
                request: {
                    type: 'GET'
                }
            }
        };

        invoke(action);
    });

    it('handles POST request action', () => {
        const { invoke } = create();
		
        const action = {
            payload: {
                request: {
                    type: 'POST'
                }
            }
        };
		
        invoke(action);
    });


    it('handles PATCH request action', () => {
        const { invoke } = create();
		
        const action = {
            payload: {
                request: {
                    type: 'PATCH'
                }
            }
        };
		
        invoke(action);
    });

	
    it('handles PUT request action', () => {
        const { invoke } = create();
		
        const action = {
            payload: {
                request: {
                    type: 'PUT'
                }
            }
        };
		
        invoke(action);
    });

	
    it('handles DELETE request action', () => {
        const { invoke } = create();
		
        const action = {
            payload: {
                request: {
                    type: 'DELETE'
                }
            }
        };
		
        invoke(action);
    });


    it('handles a miss-typed request action', () => {
        const { invoke } = create();
		
        const action = {
            payload: {
                request: {
                    type: 'INEXISTENT'
                }
            }
        };
		
        invoke(action);
    });

});