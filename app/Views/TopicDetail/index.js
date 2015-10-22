/* @flow */
'use strict';

var React = require('react-native');

var {
  WebView,
  View,
  StyleSheet,
} = React;

var TopicDetail = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});


module.exports = TopicDetail;
