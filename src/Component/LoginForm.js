import React,{Component} from 'react';
import {View, TextInput } from 'react-native';
import {Card,CardSelection,Button} from './common';

class LoginForm extends Component{
  render(){
    return(
      <Card>
        <CardSelection>
            <TextInput style={{heght:20,width:100}} />
        </CardSelection>
        <CardSelection />
        <CardSelection>
            <Button>Login</Button>
        </CardSelection>
      </Card>
    );
  }
}

export default LoginForm;
