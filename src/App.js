import React from 'react';
import './App.css';
import Header from './component/Common/Header'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from "./theme";
import ResultGrid from './component/ResultGrid';
import { Grid } from '@material-ui/core'
function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="App">
        <Header></Header>
        <Grid container>
          <ResultGrid></ResultGrid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
