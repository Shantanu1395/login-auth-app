import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

class Home extends Component {

  renderButton() {
      const buttonText = 'Logout'; 
      return (
         <Button title={buttonText} onPress={this.handleRequest.bind(this)}/>
      );
  }  

  render() {

    const buttonContainerStyle = style;

    return (
        <View>
      <View>
        <Text>Home screen</Text>
      </View>
      <View style={buttonContainerStyle}>
        {this.renderButton()}
      </View>
      </View>
    );
  }

  handleRequest() {
    const endpoint = 'logout';
    console.log("Log out baby");

    axios
      .get(`/auth/${endpoint}/`)
      .then(response => {
        const { token, user } = response.data;
  
        // We set the returned token as the default authorization header
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        console.log("Logged out");
        // Navigate to the home screen
        
        Actions.login();
        this.props.navigation.goBack();
        console.log('sdfs');
        
        
      })
      .catch(error => {
          console.log(error);
          
        });
        
  }

}



const style = StyleSheet.create({
    formContainerStyle: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInputStyle: {
      flex: 1,
      padding: 15
    },
    fieldStyle: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    buttonContainerStyle: {
      flex: 1,
      justifyContent: 'center',
      padding: 25
    },
    accountCreateTextStyle: {
      color: 'black'
    },
    accountCreateContainerStyle: {
      padding: 25,
      alignItems: 'center'
    }
  });

export default Home;