import * as React from 'react';
import {TextareaAutosize} from "@mui/material";

const NoteEditor = () => {

  return (
    <div class="editorContainer">
      <TextareaAutosize
        class="editorContainer"
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: 200 }}
      />
    </div>
  );

}
export default NoteEditor;