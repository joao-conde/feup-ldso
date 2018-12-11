import axios from 'axios';

const requestMiddleware = () => next => action => {
    let endpoint = process.env.REACT_APP_ENDPOINT;
    next(action); // Dispatch the current action

    if (action.payload != null) {
        let request = action.payload.request;
        let requestPromise;

        switch (request.type) {
        case 'GET':
            requestPromise = axios.get(`${endpoint}${request.url}`);
            break;
        case 'POST':
            requestPromise = axios.post(`${endpoint}${request.url}`, request.data, authConfig());
            break;
        case 'PATCH':
            requestPromise = axios.patch(`${endpoint}${request.url}`, request.data, authConfig());
            break;
        case 'PUT':
            requestPromise = axios.put(`${endpoint}${request.url}`, request.data, authConfig());
            break;
        case 'DELETE':
            requestPromise = axios.delete(`${endpoint}${request.url}`, authConfig());
            break;
        default:
            return next({
                type: action.type + '_FAIL'
            });
        }
        return requestHandler(requestPromise, next, action.type);
    }
};

const requestHandler = (request, next, type) => {
    return request
        .then((response) => next({
            type: type + '_SUCCESS',
            payload: {
                data: response.data
            }
        }))
        .catch((err) => next({
            type: type + '_FAIL',
            payload: {
                error: err.request
            }
        }));
};

const authConfig = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('iupToken')}`
        }
    };
};

export default requestMiddleware;