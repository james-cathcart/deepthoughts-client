import initialState from "../constants/InitialState";
import {v4 as uuidv4} from 'uuid';

export function notesReducer(state = initialState, action) {

  switch (action.type) {
    case 'NEW_NOTE':
      console.log("notes reducer -> creating new note");
      let newNote = generateNewNote()
      state.notes.push(newNote);
      console.log("new notes list: " + state.notes)
      break;
    case 'CURRENT_NOTE':
      console.log("current note: ", state.currentNote)
      console.log("notes reducer -> updating current note: ", action.payload);
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
    id: uuidv4().toString(),
    body: "<h1>New Note</h1><p>Enter text here...</p>",
    created: null,
    lastViewed: null,
  }
}