import React,{Component} from 'react';
import {View } from 'react-native';
import {Card,CardSelection,Button} from './common';

class LoginForm extends Component{
  render(){
    return(
      <Card>
        <CardSelection />
        <CardSelection />
        <CardSelection>
            <Button>Login</Button>
        </CardSelection>
      </Card>
    );
  }
}

export default LoginForm;
