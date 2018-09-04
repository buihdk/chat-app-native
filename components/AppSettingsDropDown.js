import React from 'react';
import { Text, View } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export default class AppSettingsDropDown extends React.Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired, 
  };

  _menu = null;
  setMenuRef = ref => { this._menu = ref; };
  hideMenu = () => { this._menu.hide(); };
  showMenu = () => { this._menu.show(); };
  
  render() {
    return (
      <View style={{marginLeft: 5}}>
        <Menu ref={this.setMenuRef} button={<Icon onPress={this.showMenu} name="ios-settings" size={30} color="#ccc6bf"/>}>
          <MenuItem onPress={this.hideMenu}>
            <Text><Icon name="ios-person" size={16} /> Account</Text>
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={() => this.props.navigate('Auth')}>
            <Text><Icon name="ios-log-out" size={16} /> Logout</Text>
          </MenuItem>
        </Menu>
      </View>
    );
  }
};