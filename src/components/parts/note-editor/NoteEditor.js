import './note-editor.css'
import * as React from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import {connect} from "react-redux";

const NoteEditor = (props) => {

  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  return (
    <div className="editorContainer">
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={ props.notes[props.currentNoteIndex].body }
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
        {/*<button onClick={log}>Log editor content</button>*/}
    </div>
  );

}
// export default NoteEditor;

const mapStateToProps = state => {
  return {
    notes: state.notes,
    currentNoteIndex: state.currentNoteIndex,
  };
}

export default connect(mapStateToProps)(NoteEditor);