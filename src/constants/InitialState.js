import {v4 as uuidv4} from 'uuid';

const initialState = generateInitialState();
export default initialState;

function generateInitialState() {

  let mockId1 = uuidv4().toString();
  let mockId2 = uuidv4().toString();

  let notes = {};

  notes[mockId1] =  {
    id: mockId1,
    body: "<h1>Mock Linux References</h1>\n<p>Do stuff with the command line!!! Here's how to get started...</p>",
    created: "2021-09-27T12:00:00",
    edited: "2021-09-27T14:00:00",
  };

  notes[mockId2] =  {
    id: mockId2,
    body: "<h1>Mock Storage Locker Combo</h1>\n<p>Up Down Left Left Up Right Right</p>",
    created: "2021-09-24T12:00:00",
    edited: "2021-09-24T16:00:00",
  };

  let currentNote = {
    id: mockId1,
    body: "<h1>Mock Linux References</h1>\n<p>Do stuff with the command line!!! Here's how to get started...</p>",
    created: "2021-09-27T12:00:00",
    edited: "2021-09-27T14:00:00",
  };

  let composedState = {
    notes,
    currentNote
  };

  return composedState;
}