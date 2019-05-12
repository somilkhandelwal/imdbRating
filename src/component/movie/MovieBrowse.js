import React, { Component } from 'react'
import actionTypes from '../../store/action/apiActions';
import { connect } from 'react-redux';
import { history } from '../../service/history';
import qs from 'qs';

class MovieBrowse extends Component {
    componentDidMount() {
        this.unlisten = history.listen(() => this.checkQuery(history.location.search));
        this.checkQuery(history.location.search);
    }
    checkQuery(query) {
        if (query === this.lastQuery) return;
        const { specificMovieCall } = this.props;
        if (specificMovieCall && query !== '') specificMovieCall(qs.parse(query.substring(1)));
        this.lastQuery = query;
    }
    componentWillUnmount(){
        this.unlisten();
    }
    render() {
        return (
            <React.Fragment>
                <div> HELLO</div>
            </React.Fragment>
        )
    }
}

MovieBrowse.propTypes = {

};
MovieBrowse.defaultProps = {

};

// const mapStateToProps = state => {
//     const response = (state.apiReducer.data && state.apiReducer.data.data.Response);
//     let items = [];
//     if (response === 'True')
//         items = state.apiReducer.data.data.Search || [];
//     return {
//         loading: state.apiReducer.loading,
//         response,
//         items
//     };
// }

const mapDispatchToProps = dispatch => {
    return {
        specificMovieCall: (e) => dispatch(actionTypes.specificMovieCall(e)),
    }
}
export default connect(null, mapDispatchToProps)(MovieBrowse);