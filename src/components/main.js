import React, { Component } from 'react';
import {connect} from 'react-redux';
import Input from './input';
import ButtonAdd from './buttonAdd';
import reducer from './addReducer';
class Main extends Component {
    render() { 
        return (
            <div>
                <Input name="num1"/>
                <Input name="num2"/>
                <ButtonAdd/>
                {this.props.temp1} + {this.props.temp2} =  {this.props.sum}
             </div>
        );
    }
}

const mapStateToProps = (state) => {return{
    sum: state.sum,
    num1: state.num1,
    num2: state.num2,
    temp1: state.temp1,
    temp2: state.temp2
}}

export default connect(mapStateToProps,null)(Main);