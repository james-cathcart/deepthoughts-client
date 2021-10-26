import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createStore} from "redux";
import {Provider} from "react-redux";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let mockNotes = [
  {
    id: "mockNote1ID",
    title: "Mock Note 1 Title",
    body: "Mock note 1 body",
    created: "2021-09-27T12:00:00",
    lastViewed: "2021-09-27T14:00:00",
  },
  {
    id: "mockNote2ID",
    title: "Mock Note 2 Title",
    body: "Mock note 2 body",
    created: "2021-09-24T12:00:00",
    lastViewed: "2021-09-24T16:00:00",
  },
];

const store = createStore(notes);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
