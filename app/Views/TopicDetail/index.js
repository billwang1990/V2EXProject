/* @flow */
'use strict';

var React = require('react-native');

var {
  WebView,
  View,
  StyleSheet,
} = React;

var ParseHTML = require('../../ParseHtml.js');

var TopicDetail = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
          <ParseHTML style ={styles.content} code={this.props.topic.content_rendered}/>
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
  content:{
    alignItems: 'center',
    margin:5,
    paddingTop:64,
  },
});


module.exports = TopicDetail;
