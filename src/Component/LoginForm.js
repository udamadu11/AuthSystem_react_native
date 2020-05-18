import React,{Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {Card,CardSelection,Button,Input,Spinner} from './common';

class LoginForm extends Component{
  state = {email: '' , password: '',loading:false};

  onPressButton(){
    const {email,password} = this.state;

    this.setState({error: '',loading:true});

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSucess.bind(this))
    .catch(() =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoginSucess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginSucess(){
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    });
  }
  onLoginFail(){
    this.setState({error:'Authentification error',loading:false});
  }

spinnerButton(){
  if(this.state.loading){
    return <Spinner size = "small"  />
  }
  return(
    <Button onPress={this.onPressButton.bind(this)}>Login</Button>
  );
}

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
        <Text style = {styles.error}>
          {this.state.error}
        </Text>
        <CardSelection>
            {this.spinnerButton()}
        </CardSelection>
      </Card>
    );
  }
}

const styles = {
  error :{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export default LoginForm;
