import React, { Component } from 'react';
import ApplicationNavigator from './navigation';
import Layout from './components/layout';

const Database = require('./database')();

export default class App extends Component {
  componentWillMount() {
    Database.Init();
  }

  render() {
    return (
      <Layout>
        <ApplicationNavigator />
      </Layout>
    );
  }
}
