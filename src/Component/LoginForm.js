import React,{Component} from 'react';
import {Card,CardSelection,Button,Input} from './common';

class LoginForm extends Component{
  state = {email: '' , password: ''};
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
        <CardSelection>
        <Input
          placeholder = "Password"
          label = "Password"
          value = {this.state.password}
          onChangeText = {password => this.setState({password})}
          secureTextEntry
        />
        </CardSelection>
        <CardSelection>
            <Button>Login</Button>
        </CardSelection>
      </Card>
    );
  }
}

export default LoginForm;
