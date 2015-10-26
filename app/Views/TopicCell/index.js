/* @flow */
'use strict';

var React = require('react-native');
var moment = require('moment');

var {
  StyleSheet,
  View,
  Image,
  PixelRatio,
  Text,
  TouchableHighlight,
} = React;

var TopicDetail = require('../TopicDetail');

var TopicCell = React.createClass({
  render: function() {
    return (
    <TouchableHighlight onPress={this.onPress}>

      <View style = {styles.container}>
      	<Text style = {styles.title} numberOfLines = {1} textAlign={'left'}>{this.props.topic.title}</Text>
      	<Text style = {styles.content} numberOfLines = {2}> {this.props.topic.content}</Text>
      	<View style = {styles.container_1}>
      	  <Image
      	    style={styles.img_view}
      	    source={{uri: 'http:'+this.props.topic.member.avatar_normal}} />
      	  <Text style={styles.created}>
      	   {this.props.topic.member.username} created {moment.unix(this.props.topic.created).fromNow()}
      	  </Text>
      	</View>
	    <View style={styles.cellBorder} />
      </View>  
    </TouchableHighlight>
    );
  },

  onPress: function(){
    this.props.navigator.push({
      title: this.props.topic.title,
      component: TopicDetail,
      passProps: {topic: this.props.topic},
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor : '#FFFFFF',
    height : 80,
  },
  
  title:{
  	flex:1,
  	marginLeft : 10,
  	marginRight : 10,
  	marginTop : 5,
  	fontSize : 14,
  	fontWeight: 'bold',
  },

  content:{
  	flex : 2,
  	alignItems : 'center',
  	marginLeft : 10,
  	marginRight : 10,
  	marginTop : 2,
  	fontSize : 12,
  },

  container_1:{
  	flex : 1,
  	flexDirection : 'row',
  	justifyContent: 'center',
  	height : 30,
  },

  img_view:{
    height:18,
    width : 18,
    marginRight :5,
    marginLeft :10,
    marginBottom : 2,
    backgroundColor:'#fff',
  },

  created:{
  	fontSize : 10,
  	color: '#0F0F0F',
  	flex : 2,
  },

  cellBorder: {
    backgroundColor: '000fff',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },
});

module.exports = TopicCell;
