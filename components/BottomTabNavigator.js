import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import LoginContainer from './LoginContainer';
import ChatRoomContainer from './ChatRoomContainer';
import UsersContainer from './UsersContainer';
import ConversationsContainer from './ConversationsContainer';
import ConversationDetailsScreen from '../screens/ConversationDetailsScreen';
import { ChatRoomIcon, ConversationsIcon, UsersIcon } from '../assets/Icons';

const Authentication = createStackNavigator({
  Login: LoginContainer
});

const ChatRoomStack = createStackNavigator({
  ChatRoom: ChatRoomContainer
});

const ConversationsStack = createStackNavigator({
  Conversations: ConversationsContainer,
  ConversationDetails: ConversationDetailsScreen,
});

const UsersStack = createStackNavigator(
  {
    Users: { 
      screen: UsersContainer,
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

const App = createBottomTabNavigator(
  {
    ChatRoom: {
      screen: ChatRoomStack,
      path: '/chatroom',
      navigationOptions: ({screenProps}) => { 
        return { 
          tabBarLabel: 'Chat Room',
          tabBarIcon: ChatRoomIcon,
          tabBarOnPress: ({defaultHandler}) => {
            defaultHandler();
          }
        };
      }
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
    /* Other configuration remains unchanged */
  },
);

export default createSwitchNavigator({
  Auth: Authentication,
  App: App
});