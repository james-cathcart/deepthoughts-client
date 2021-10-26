import initialState from "../constants/InitialState";

export function notesReducer(state = initialState, action) {

  switch (action.type) {
    case 'NEW_NOTE':
      console.log("notes reducer -> creating new note");
      break;
    case 'CURRENT_NOTE':
      console.log("notes reducer -> updating current note");
      break;
    default:
      console.log("notes reducer -> no valid action type observed: ", action.type)
      break;
  }

  return state;
}

