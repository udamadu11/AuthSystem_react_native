import React,{Component} from 'react';
import {TextInput } from 'react-native';
import {Card,CardSelection,Button} from './common';

class LoginForm extends Component{
  state = {text: ''};
  render(){
    return(
      <Card>
        <CardSelection>
            <TextInput
            value={this.state.text}
            onChange = {text=> this.setState({ text })}
            style={{heght:20,width:100}}
            />
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
