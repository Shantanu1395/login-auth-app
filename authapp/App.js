import React, { Component } from 'react';
import axios from 'axios';
import Router from './src/components/Router';


export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }

  componentWillMount() {
    axios.defaults.baseURL = 'http://192.168.43.166:9000/api';
    axios.defaults.timeout = 1500;
  }

}