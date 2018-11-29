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
                {this.props.sum}
            </div>
        );
    }
}

const mapStateToProps = (state) => {return{
    sum: state.sum
}}

export default connect(mapStateToProps,null)(Main);