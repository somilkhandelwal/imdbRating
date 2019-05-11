import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Header from './Common/Header'
import ResultGrid from './ResultGrid'
class RatingComponent extends Component {

    render() {
        return (
            <div className="App">
                <Header></Header>
                <Grid container>
                    <ResultGrid></ResultGrid>
                </Grid>
            </div>
        )
    }
}

RatingComponent.propTypes = {
    
};
RatingComponent.defaultProps = {
  
};

export default RatingComponent;