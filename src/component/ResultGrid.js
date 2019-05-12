import React from 'react';
import actionTypes from '../store/action/apiActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, CircularProgress } from '@material-ui/core'
import MediaCard from './Common/MediaCard';
import { history } from '../service/history';
import urls from '../service/urls'


class ResultGrid extends React.Component {
    renderNoContent = () => {
        const { response } = this.props;
        if(response==='False')
        {
            // TODO make a genric componet for No Result and Search Result
            return (
                <Grid container>
                    <Grid item>
                        No Result
                    </Grid>
                </Grid>
            )

        }
        return (
            <Grid container>
                <Grid item>
                    Please Search Result
                </Grid>
            </Grid>
        )
    }
    render() {
        const {items, loading, navigate } = this.props;
        if (!items || !items.length) return this.renderNoContent()
        debugger
        return (
            <React.Fragment>
                {loading ? <CircularProgress
                    variant="determinate"
                /> : <Grid justify="space-evenly" style={{ margin: '0px', width: '100%'}} spacing={16} container >
                        {items.map(item => 
                            <Grid key={item.imdbID} item xs={3}>
                                <MediaCard item={item} onSelect={id => history.push(urls.movies(id))}/> 
                            </Grid>
                            )
                        }
                    </Grid>}
            </React.Fragment>
        );
    }
}

ResultGrid.propTypes = {
    loading: PropTypes.bool.isRequired,
    response: PropTypes.string,
    items: PropTypes.array
};
ResultGrid.defaultProps = {
    response: null,
    items: null
};

const mapStateToProps = state => {
    const response = (state.apiReducer.data && state.apiReducer.data.data.Response);
    let items = [];
    if (response === 'True')
        items = state.apiReducer.data.data.Search || [];
    return {
        loading: state.apiReducer.loading,
        response,
        items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        navigate: (id) => dispatch(actionTypes.navigate(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultGrid);
