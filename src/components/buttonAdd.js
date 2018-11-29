import React, { Component } from 'react';
import {connect} from 'react-redux';
class ButtonAdd extends Component {
    render() { 
        return (
            <button onClick={this.props.Add}>ADD</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {return{
    Add: () =>dispatch({type:"ADD"})
}};

const mapStateToProps = (state) => {return{
    num1:state.num1,
    num2:state.num2
}}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonAdd);