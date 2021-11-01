import './note-editor.css'
import * as React from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import {connect} from "react-redux";
import {saveNoteChangeAction} from "../../../actions";

const NoteEditor = (props) => {

  const editorRef = useRef(null);
  const saveNoteChanges = () => {
    if (editorRef.current) {
      let newBody = editorRef.current.getContent();
      console.log(newBody);
      props.dispatch(
        saveNoteChangeAction(props.currentNote, newBody)
      )
    }
  };

  return (
    <div className="editorContainer">
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={ props.currentNote.body }
          init={{
            skin: "oxide-dark",
            content_css: "dark",
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={saveNoteChanges}>Save Changes</button>
    </div>
  );

}
// export default NoteEditor;

const mapStateToProps = state => {
  return { currentNote: state.currentNote };
}

export default connect(mapStateToProps)(NoteEditor);