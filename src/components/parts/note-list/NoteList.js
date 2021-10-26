import './note-list.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {connect} from "react-redux";
import {Button} from "@mui/material";

const NoteList = props => {

  // const [loaded, setLoaded] = useState(false);
  // const [notes, setNotes] = useState([]);
  //
  // let url = new URL("http://localhost:8080/api/v1/note");
  // let params = [
  //   // ['userid', props.userid]
  //   ['userid', 'asdfasdf']
  // ];
  // url.search = new URLSearchParams(params).toString();
  //
  // useEffect(
  //   () => {
  //     if (!loaded) {
  //       fetch(url)
  //       .then(res => res.json())
  //       .then(jsonResponse => setNotes(jsonResponse))
  //       .then(() => setLoaded(true))
  //     }
  //   }
  // );


  const onNewNoteClick = () => {
    props.dispatch({
      type: 'NEW_NOTE',
    })
  };

  const onNoteClick = (event) => {

    let nextCurrentNote = props.notes[event.currentTarget.noteindex];

    props.dispatch({
      type: 'CURRENT_NOTE',
      payload: {
        currentNote: nextCurrentNote
      }
    })
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
                <ListItem key={"li-" + index} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={note.body.split("\n")[0].replace(/<\/?[^>]+(>|$)/g, "").substr(0, 25)}
                      noteid={note.id}
                      id={"note-" + index}
                      noteindex={index}
                      onClick={onNoteClick}
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