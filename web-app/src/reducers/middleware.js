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
            requestPromise = axios.post(`${endpoint}${request.url}`, request.data);
            break;
        case 'PATCH':
            requestPromise = axios.patch(`${endpoint}${request.url}`, request.data);
            break;
        case 'PUT':
            requestPromise = axios.put(`${endpoint}${request.url}`, request.data);
            break;
        case 'DELETE':
            requestPromise = axios.delete(`${endpoint}${request.url}`);
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
        .catch(() => next({
            type: type + '_FAIL'
        }));
};

export default requestMiddleware;