import { v4 as uuidv4 } from 'uuid';

const NewNote = {
  id: uuidv4(),
};

export function createNewNote() {

  return {
    type: 'NEW_NOTE',
    payload: NewNote,
  };

}