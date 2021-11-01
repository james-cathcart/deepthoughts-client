import './note-list.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {connect} from "react-redux";
import {Button} from "@mui/material";
import {createNewNote, updateCurrentNote} from "../../../actions";

const NoteList = props => {

  const onNewNoteClick = () => {
    console.log("dispatching new note action")
    props.dispatch(
      createNewNote()
    );
    console.log(props.notes);
  };

  const onNoteClick = (note) => {

    console.log("changing to note with ID: ", note.id)
    props.dispatch(
      updateCurrentNote(note)
    );
  };

  return (
    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <Button id="newNoteBtn" onClick={onNewNoteClick}>+ Note</Button>
      <nav aria-label="main mailbox folders">
        <List>
          {
            props.notes != null && props.notes.length > 0
              ? props.notes.map(
              (note, index) => (
                <ListItem key={index}
                          // noteid={note.id}
                          // noteindex={index}
                          // onClick={(e) => onNoteClick(e)}
                          disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={note.body.split("\n")[0].replace(/<\/?[^>]+(>|$)/g, "").substr(0, 25)}
                      // noteid={note.id}
                      // noteindex={index}
                      onClick={() => onNoteClick(note)}
                    />
                  </ListItemButton>
                </ListItem>
              ),
              )
              : <ListItem key="nilkey" disablePadding>
                <ListItemButton>
                  <ListItemText key="nilkey" primary="No Notes"/>
                </ListItemButton>
              </ListItem>
          }
        </List>
      </nav>
    </Box>
  );
}
// export default NoteList;

const mapStateToProps = (state) => {
  return { notes: state.notes };
}
export default connect(mapStateToProps)(NoteList);