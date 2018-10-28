// Actions
// Toggle language between english and portuguese
const TOGGLE_LANGUAGE = 'mobile/language/TOGGLE_LANGUAGE';

const initialState = {
  selection: 'en'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return {
        selection: state.selection == 'en'? 'pt' : 'en'
      };
    default:
      return state;
  }
}

export function toggleLanguage() {
  return {
    type: TOGGLE_LANGUAGE
  };
}