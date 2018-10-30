// Actions
// Lock / Unlock Screen
const TOGGLE_LOCK = 'mobile/lock/TOGGLE_LOCK';

const initialState = {
    locked: false
};

// Draft reducer for lock logic - TODO
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case TOGGLE_LOCK:
        return {
        // TODO será mais complexo do que isto, pois depende do boolean recebido pelo pedido a API (true se autenticar, falso otherwise)
            locked: !state.locked
        };
    default:
        return state;
    }
}

// Post request - user e password passados no objeto. Password já hashed. cofnrme resposta fazer
export function toggleScreen() {
    return {
        type: TOGGLE_LOCK
    
    };
}