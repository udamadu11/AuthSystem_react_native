import React , {Component}from 'react';
import  {View , Text} from 'react-native';
import firebase from 'firebase';
import {Header,Button,Spinner,CardSelection} from './src/Component/common';
import LoginForm from './src/Component/LoginForm.js';
class App extends Component{

  state = {loggingIn: null};

  componentWillMount(){
    firebase.initializeApp({
        apiKey: 'AIzaSyCt0TPR-h4V66-n70tNuEYQjh9BJUy9Q4w',
        authDomain: 'auth-4cba7.firebaseapp.com',
        databaseURL: 'https://auth-4cba7.firebaseio.com',
        projectId: 'auth-4cba7',
        storageBucket: 'auth-4cba7.appspot.com',
        messagingSenderId: '70449828574',
        appId: '1:70449828574:web:a92f687188ae7dd76d284f',
        measurementId: 'G-ENH158900P'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggingIn:true});
      }else{
        this.setState({loggingIn:false});
      }
    });
  }

  renderContent(){

    switch (this.state.loggingIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render(){
    return(
      <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
