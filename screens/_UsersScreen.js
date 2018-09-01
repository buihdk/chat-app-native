import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchFakeUsers } from '../actions';
import { SearchBar, List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

class UsersScreen extends React.Component {
  componentDidMount() {
    this.props.fetchFakeUsers();
  }
  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };
  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: '86%', backgroundColor: '#CED0CE', marginLeft: '14%' }} />
    );
  };

  render() {
    return (
      <View>
        <List containerStyle={{ marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.props.users }
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            keyExtractor={item => item.login.uuid}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </List>
      </View>  
    );
  }
}

UsersScreen.propTypes = {
  fetchFakeUsers: PropTypes.func.isRequired, 
  isLoading: PropTypes.bool.isRequired, 
  users: PropTypes.array.isRequired, 
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  firstLoad: state.users.firstLoad,
  isLoading: state.users.isLoading,
  isRefreshing: state.users.isRefreshing,
  page: state.users.page,
  seed: state.users.seed,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFakeUsers: () => dispatch(fetchFakeUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);