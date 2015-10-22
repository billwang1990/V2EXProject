/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

var MainScreen = require('./app/Views/Main');

var V2EXProject = React.createClass({
  render: function() {
    return (

      <NavigatorIOS style={styles.container} initialRoute={{
        component:MainScreen,
        title:'V2EX'
      }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('V2EXProject', () => V2EXProject);
