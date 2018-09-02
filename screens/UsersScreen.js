import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

const UsersScreen = (props) => {
  if (props.users.length < 1 || props.users == undefined)
    return <ActivityIndicator size='large' style={{marginTop: '50%'}}/>;

  return (
    <List containerStyle={{ marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0 }}>
      <FlatList
        data={props.users}
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
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
      />
    </List>
  );
};

const renderHeader = () => <SearchBar placeholder="Type Here..." lightTheme round />;
const renderSeparator = () => <View style={{ height: 1, width: '86%', backgroundColor: '#CED0CE', marginLeft: '14%' }} />;

UsersScreen.propTypes = {
  users: PropTypes.array.isRequired, 
};

export default UsersScreen;