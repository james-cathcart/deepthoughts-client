import initialState from "../constants/InitialState";
import {v4 as uuidv4} from 'uuid';

export function notesReducer(state = initialState, action) {

  switch (action.type) {
    case 'NEW_NOTE':
      console.log("notes reducer -> creating new note");
      state.notes.push(generateNewNote())
      console.log("new notes list: " + state.notes)
      break;
    case 'CURRENT_NOTE':
      console.log("notes reducer -> updating current note");
      state.currentNote = action.payload;
      break;
    default:
      console.log("notes reducer -> default action applied as no valid action type observed: ", action.type)
      break;
  }

  return state;
}

function generateNewNote() {
  return {
    id: uuidv4(),
    body: "<h1>New Note</h1><p>Enter text here...</p>",
    created: null,
    lastViewed: null,
  }
}