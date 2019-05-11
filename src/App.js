import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from "./theme";
import RatingComponent from './component/RatingComponent';
function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <RatingComponent/>
    </MuiThemeProvider>
  );
}

export default App;
