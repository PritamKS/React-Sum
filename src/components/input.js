import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
    render() {
        return (
            <input type="number" onChange={this.props.change} name={this.props.name}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (e) => { dispatch({ type: "CHANGE", val: e.target.value, name:e.target.name }) }
    }
}

export default connect(null,mapDispatchToProps)(Input);