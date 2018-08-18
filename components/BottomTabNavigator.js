import React from 'react';
import { Text, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ConversationsScreen from './ConversationsScreen';
import UsersScreen from './UsersScreen';
import ConversationDetailsScreen from './ConversationDetailsScreen';
import { NowPlayingIcon, TopRatedIcon } from './Icons';

const ConversationsStack = createStackNavigator(
  {
    Conversations: { 
      screen: ConversationsScreen,
      navigationOptions: { 
        title: 'Conversations',
        headerLeft: ( <Image style={{height: 38, width: 50}} source={require('../assets/oms-logo.png')} /> ),
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

const UsersStack = createStackNavigator(
  {
    Users: { 
      screen: UsersScreen,
      navigationOptions: { 
        title: 'Users',
        headerLeft: ( <Image style={{height: 38, width: 50,}} source={require('../assets/oms-logo.png')} /> ),
        headerTitle: ( <Text style={{color:'#e50914', fontSize: 20, fontWeight: 'bold'}}>Users</Text> ),
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
    initialRouteName: 'Users'
  },
);

export default createBottomTabNavigator(
  {
    Conversations: {
      screen: ConversationsStack,
      path: '/conversations',
      navigationOptions: ({screenProps}) => {
        return {
          tabBarLabel: 'Conversation',
          tabBarIcon: NowPlayingIcon,
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
          tabBarIcon: TopRatedIcon,
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