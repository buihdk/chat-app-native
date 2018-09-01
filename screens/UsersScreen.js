import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';

export default class UsersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoad: true,
      isLoading: false,
      users: [],
      page: 1,
      seed: 1,
      error: null,
      isRefreshing: false,
    };
  }

  fetchFakeUsers() {
    const { page, seed } = this.state;
    setTimeout(async () => {
      try {
        let response = await fetch(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`);
        let data = await response.json();
        this.setState({ 
          users: page === 1 ? data.results : [...this.state.users, ...data.results],
          error: data.error || null,
          firstLoad: false,
          isLoading: false,
          isRefreshing: false
        });
      } catch(error) { 
        this.setState({ error, firstLoad: false, isLoading: false, isRefreshing: false });
        alert(error); 
      }
    }, 500);  
  }
  handleRefresh = () => {
    this.setState({
      page: 1,
      seed: this.state.seed + 1,
      isRefreshing: true
    }, () => { this.fetchFakeUsers(); });
  };
  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
      isLoading: true
    }, () => { this.fetchFakeUsers(); });
  };
  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };
  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: '86%', backgroundColor: '#CED0CE', marginLeft: '14%' }} />
    );
  };
  renderFooter = () => {
    if (!this.state.isLoading) return null;
    return (
      <View style={{paddingVertical: 20, borderTopWidth: 1, borderColor: '#CED0CE'}}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  componentDidMount() {
    this.fetchFakeUsers();
  }

  render() {
    return (
      <View>
        { this.state.firstLoad ? 
          <ActivityIndicator size='large' style={{marginTop: '50%'}}/> : 
          <List containerStyle={{ marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
              data={this.state.users}
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
              ListFooterComponent={this.renderFooter}
              onRefresh={this.handleRefresh}
              refreshing={this.state.isRefreshing}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={10}
            />
          </List>
        }
      </View>  
    );
  }
}