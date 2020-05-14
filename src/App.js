import React , {Component}from 'react';
import  {View , Text} from 'react-native';
import Firebase from 'firebase';
import {Header} from './Component/common';
import LoginForm from './Component/LoginForm.js';
class App extends Component{
  componentWillMount(){
    Firebase.initializeApp({
        apiKey: 'AIzaSyCt0TPR-h4V66-n70tNuEYQjh9BJUy9Q4w',
        authDomain: 'auth-4cba7.firebaseapp.com',
        databaseURL: 'https://auth-4cba7.firebaseio.com',
        projectId: 'auth-4cba7',
        storageBucket: 'auth-4cba7.appspot.com',
        messagingSenderId: '70449828574',
        appId: '1:70449828574:web:a92f687188ae7dd76d284f',
        measurementId: 'G-ENH158900P'
    });
  }
  render(){
    return(
      <View>
        <Header headerText="Authentification" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
