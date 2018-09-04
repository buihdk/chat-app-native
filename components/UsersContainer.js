import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchFakeUsers } from '../utils/actions';
import AppSettingsDropDown from './AppSettingsDropDown';
import AppInfoModal from './AppInfoModal';
import UsersScreen from '../screens/UsersScreen';
import PropTypes from 'prop-types';

class UsersContainer extends React.Component {
  static navigationOptions = ({navigation}) => {  
    return {
      headerLeft: <AppSettingsDropDown navigate = {navigation.navigate}/>,
      headerTitle: <Text style={{color:'#3a5998', fontSize: 20, fontWeight: 'bold'}}>Users</Text>,
      headerRight: <AppInfoModal />,
    };
  };
  componentDidMount() {
    this.props.fetchFakeUsers();
  }

  render() {
    return (
      <UsersScreen 
        users={this.props.users}
      />
    );
  }
}

UsersContainer.propTypes = {
  fetchFakeUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired, 
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  isRefreshing: state.users.isRefreshing,
  page: state.users.page,
  seed: state.users.seed,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFakeUsers: () => dispatch(fetchFakeUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);