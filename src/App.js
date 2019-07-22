import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from "./theme";
import RatingComponent from './component/RatingComponent';
function App(props) {
  // console.log(props)
  return (
    <MuiThemeProvider theme={muiTheme}>
      <RatingComponent {...props}/>
    </MuiThemeProvider>
  );
}

export default App;
