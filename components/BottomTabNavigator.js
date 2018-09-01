import React from 'react';
import { Text, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ConversationsScreen from '../screens/ConversationsScreen';
import UsersScreen from '../screens/_UsersScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ConversationDetailsScreen from '../screens/ConversationDetailsScreen';
import { ChatRoomIcon, ConversationsIcon, UsersIcon } from './Icons';

const ChatRoomStack = createStackNavigator(
  {
    ChatRoom: { 
      screen: ChatRoomScreen,
      navigationOptions: { 
        title: 'Chat Room',
        headerLeft: ( <Image style={{height: 38, width: 50}} source={require('../assets/instaChat.png')} /> ),
        headerTitle: ( <Text style={{color:'#3a5998', fontSize: 20, fontWeight: 'bold'}}>Chat Room</Text> ),
        // headerRight: ( <AppInfoModal /> ),
      },
    },
  },
);

const UsersStack = createStackNavigator(
  {
    Users: { 
      screen: UsersScreen,
      navigationOptions: { 
        title: 'Users',
        headerLeft: ( <Image style={{height: 38, width: 50,}} source={require('../assets/instaChat.png')} /> ),
        headerTitle: ( <Text style={{color:'#e50914', fontSize: 20, fontWeight: 'bold'}}>Users</Text> ),
        // headerRight: ( <AppInfoModal /> ),
      },
    },
    UserDetails: { 
      screen: ConversationDetailsScreen,
      // navigationOptions: 
      //   ({navigation}) => { 
      //     return { 
      //       headerTitle: navigation.getParam('movie').title }; 
      //   }
    }
  },
  {
    initialRouteName: 'Users'
  },
);

const ConversationsStack = createStackNavigator(
  {
    Conversations: { 
      screen: ConversationsScreen,
      navigationOptions: { 
        title: 'Conversations',
        headerLeft: ( <Image style={{height: 38, width: 50}} source={require('../assets/instaChat.png')} /> ),
        headerTitle: ( <Text style={{color:'#e50914', fontSize: 20, fontWeight: 'bold'}}>Conversations</Text> ),
        // headerRight: ( <AppInfoModal /> ),
      },
    },
    ConversationDetails: { 
      screen: ConversationDetailsScreen,
      // navigationOptions: 
      //   ({navigation}) => { 
      //     return { 
      //       headerTitle: navigation.getParam('movie').title }; 
      //   }
    }
  },
  {
    initialRouteName: 'Conversations'
  },
);

export default createBottomTabNavigator(
  {
    ChatRoom: {
      screen: ChatRoomStack,
      path: '/chatroom',
      navigationOptions: ({screenProps}) => { 
        return { 
          tabBarLabel: 'Chat Room',
          tabBarIcon: ChatRoomIcon,
          tabBarOnPress: ({defaultHandler}) => {
            // screenProps.handleRefresh('top_rated');
            defaultHandler();
          }
        };
      }
    },
    Conversations: {
      screen: ConversationsStack,
      path: '/conversations',
      navigationOptions: ({screenProps}) => {
        return {
          tabBarLabel: 'Conversations',
          tabBarIcon: ConversationsIcon,
          tabBarOnPress: ({defaultHandler}) => {
            // screenProps.handleRefresh('now_playing');
            defaultHandler();
          }
        };
      },
    },
    Users: {
      screen: UsersStack,
      path: '/users',
      navigationOptions: ({screenProps}) => { 
        return { 
          tabBarLabel: 'Users',
          tabBarIcon: UsersIcon,
          tabBarOnPress: ({defaultHandler}) => {
            // screenProps.handleRefresh('top_rated');
            defaultHandler();
          }
        };
      }
    },
    
    /* Other configuration remains unchanged */
  },
);