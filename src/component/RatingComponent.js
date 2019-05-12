import React, { Component, Fragment } from 'react'
import Header from './Common/Header'
class RatingComponent extends Component {
    render() {
        const { approutes } = this.props;
        console.log(this.props)
        return (
            <div className="App">
                <Header></Header>
                {approutes}
            </div>
        )
    }
}

RatingComponent.propTypes = {

};
RatingComponent.defaultProps = {

};

export default RatingComponent;