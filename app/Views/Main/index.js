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
      <View style={styles.container}>      

        <RefreshableListView
          style = {styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderTopicCell}
          loadData={this.fetchData}
          refreshDescription="Refreshing top stories" />

      </View>
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
        <Text>
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


var styles = StyleSheet.create({
  listView: {
  	flex : 1,
    backgroundColor: '#E2E2E2',
  },

  container: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'center',
    backgroundColor: '#E2E2E2',
  }
});

module.exports = MainScreen;
