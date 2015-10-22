/* @flow */
'use strict';

var React = require('react-native');
var moment = require('moment');

var {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} = React;

var TopicDetail = require('../TopicDetail');

var TopicCell = React.createClass({
  render: function() {
    return (
    <TouchableHighlight onPress={this.onPress}>

      <View style = {styles.container}>
	    <Image style={styles.img_view} source={{uri: 'http:'+this.props.topic.member.avatar_normal}}/>
	      <View style= {styles.container_1}>
		    <Text style={styles.title} numberOfLines={2}>
		    	{this.props.topic.title}
		    </Text>
		    <View style={styles.container_1_1}>
		    	<Text style={styles.author}>
		    	  {this.props.topic.member.username}
		    	</Text>
		    	<Text style={styles.created}>
		    	  created {moment.unix(this.props.topic.created).fromNow()}
		    	</Text>
		    </View>
		  </View>
      </View>  
    </TouchableHighlight>
    );
  },

  onPress: function(){
    this.props.navigator.push({
      title: this.props.topic.title,
      component: TopicDetail,
      passProps: {url: this.props.topic.url},
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor : '#FFFFFF'
  },
  img_view:{
    height:60,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    marginTop:5,
    backgroundColor:'#fff',
    flex:1
  },
  container_1:{
  	flex:3,
  	height: 60,
  	marginTop : 5,
  	marginBottom : 5,
  	marginLeft: 5,
  	justifyContent: 'center',
  	flexDirection: 'column',
  },

  title:{	
  	flex:2,
  	marginRight: 5,
  	justifyContent: 'center'
  },

  container_1_1:{
  	flex : 1,
  	flexDirection: 'row',
  },
  author:{
 	flex : 1,
  },

  created:{
  	flex : 3,
  }
});

module.exports = TopicCell;
