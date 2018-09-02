import React from 'react';
import { connect } from 'react-redux';
import { fetchFakeUsers } from '../actions';
import UsersScreen from '../screens/UsersScreen';
import PropTypes from 'prop-types';

class Users extends React.Component {
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

Users.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);