import React from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

const items = ['item 1', 'item 2']

class ListExample extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.tasks}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state
  }
};

export default connect(
  mapStateToProps
)(ListExample);