/* @flow */
'use strict';

var React = require('react-native');
var RefreshableListView = require('react-native-refreshable-listview')

var {
  StyleSheet,
  View,
  ListView,
  Text,
} = React;

var api = require('../../api.js');
var TopicCell = require('../TopicCell');

var MainScreen = React.createClass({

  componentDidMount: function() {
 	//fetch data from 
 	this.fetchData();
  },

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  render: function() {

  	if (!this.state.loaded) {
  		return this.rederLoadingView();
  	}

  	return (
        <RefreshableListView
          style = {styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderTopicCell}
          loadData={this.fetchData}
          refreshDescription="下拉刷新" 
          scrollEventThrottle = {100}
          refreshingIndictatorComponent={
            <RefreshableListView.RefreshingIndicator stylesheet={indicatorStylesheet} />
         }/>
  	);
  },

  fetchData: function(value){
  	fetch(api.HOT_TOPIC)
  	  .then((response) => response.json())
  	  .then((responseData) => {
  	  	this.setState({
  	  		dataSource: this.state.dataSource.cloneWithRows(responseData),
  	  		loaded : true, 
  	  	});
  	  }).done();
  },

  rederLoadingView: function(){
    return (
      <View style={styles.container}>
        <Text textAlign={'center'} fontSize = {50} fontWeight = {'bold'}>
                Loading movies...
        </Text>
      </View>
    );
  },

  renderTopicCell: function(topic){
    return(
      <TopicCell topic={topic} navigator={this.props.navigator}/>
    );
  },
});

var indicatorStylesheet = StyleSheet.create({
  wrapper: {
    backgroundColor: 'f0f0f0',
    height: 60,
    marginTop: 10,
  },
  content: {
    backgroundColor: 'f0f0f0',
    marginTop: 5,
    height: 60,
    marginBottom: 5,
  },
});

var styles = StyleSheet.create({
  listView: {
  	flex : 1,
    backgroundColor: '#f0f0f0',
    paddingTop : 64,
  },

  container: {
    flex: 1,
    paddingTop: 64,
    alignItems : 'center',
    backgroundColor: '#f0f0f0',
  },
});

module.exports = MainScreen;
