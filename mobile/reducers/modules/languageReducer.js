// Actions
// Toggle language between english and portuguese
const TOGGLE_LANGUAGE = 'mobile/language/TOGGLE_LANGUAGE';

const initialState = {
  language: 'en'
};

// TODO: think how to force requests to api's -> mby force the component to remount
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return {
        name: state.language == 'en'? 'pt' : 'en'
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