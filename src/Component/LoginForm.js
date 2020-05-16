import React,{Component} from 'react';
import {Card,CardSelection,Button,Input} from './common';

class LoginForm extends Component{
  state = {text: ''};
  render(){
    return(
      <Card>
        <CardSelection>
            <Input
            label="Email"
            value={this.state.text}
            onChangeText = {text=> this.setState({ text })}
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
