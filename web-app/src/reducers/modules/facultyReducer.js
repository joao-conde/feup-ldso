import {
    SET_FACULTY
} from '../../actions/facultyActions';

const initialState = {
    name: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case SET_FACULTY:
        return { ...state,
            name: action.name
        };
    default:
        return state;
    }
}