import React from 'react';
import actionTypes from '../store/action/apiActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, CircularProgress } from '@material-ui/core'
import MediaCard from './Common/MediaCard';

class ResultGrid extends React.Component {
    render() {
        const { classes, items, loading } = this.props;
        if (!items || !items.length) return null
        return (
            <React.Fragment>
                {loading ? <CircularProgress
                    variant="determinate"
                /> : <Grid justify="space-evenly" style={{ margin: '8px' }} spacing={16} container >
                        {items.map(item => <Grid key={item.imdbID} item xs={3}><MediaCard item={item}></MediaCard></Grid>)}
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
    response: 'False',
    items: null
};

const mapStateToProps = state => {
    const response = (state.apiReducer.data && state.apiReducer.data.data.Response) || 'False';
    let items = [];
    debugger
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
        filterQueryCall: (e) => dispatch(actionTypes.filterQueryCall(e)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultGrid);
