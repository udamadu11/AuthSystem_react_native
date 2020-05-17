import React,{Component} from 'react';
import {Card,CardSelection,Button,Input} from './common';

class LoginForm extends Component{
  state = {email: ''};
  render(){
    return(
      <Card>
        <CardSelection>
            <Input
            placeholder = "email@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText = {email=> this.setState({ email })}
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
