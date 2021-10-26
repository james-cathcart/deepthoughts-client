import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useEffect, useState} from "react";

const NoteList = (props) => {

  const [loaded, setLoaded] = useState(false);
  const [notes, setNotes] = useState([]);

  let url = new URL("http://localhost:8080/api/v1/note");
  let params = [
    // ['userid', props.userid]
    ['userid', 'asdfasdf']
  ];
  url.search = new URLSearchParams(params).toString();

  useEffect(
    () => {
      if (!loaded) {
        fetch(url)
        .then(res => res.json())
        .then(jsonResponse => setNotes(jsonResponse))
        .then(() => setLoaded(true))
      }
    }
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {
            notes != null && notes.length > 0
            ? notes.map(
              (note, index) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={note.title} />
                  </ListItemButton>
                </ListItem>
              ),
              )
              : <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="No Notes" />
                </ListItemButton>
              </ListItem>
          }
        </List>
      </nav>
    </Box>
  );
}
export default NoteList;