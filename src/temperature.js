import React, { Component } from 'react';
import {connect} from 'react-redux';
class Temperature extends Component{
    render(){
        return(
            <div>
            <input type="number" onChange={this.props.change} />
            <button name="C-F" onClick={this.props.convert}>C-F</button>
            <button nam="F-C" onClick={this.props.convert}>F-C</button>
            <b><p id="boot"></p></b>
            </div>
        );
    }
}

const mapStateToProps = (state) => {return{
    text:state.text,
    temp:state.temp
}};

const mapDispatchToProps = (dispatch) => {return{
    change: (e) => {dispatch({type:"CHANGE", val:e.target.value})},
    convert: (e) => {dispatch({type:"CONVERT", val:e.target.value, name: e.target.name})}
}};

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
