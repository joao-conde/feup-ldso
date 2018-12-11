// AUTHENTICATION ACTIONS
// Login
export const LOGIN = 'web/login/LOGIN';
export const LOGIN_SUCCESS = 'web/login/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'web/login/LOGIN_FAIL';
// Logout
export const LOGOUT = 'web/login/LOGOUT';

export function login(username, password) {
    return {
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
}

export function logout() {
    return {
        type: LOGOUT
    };
}