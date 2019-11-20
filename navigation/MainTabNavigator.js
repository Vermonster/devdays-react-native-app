import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MedicationsScreen from '../screens/MedicationsScreen';
import ConditionsScreen from '../screens/ConditionsScreen';
import ObservationsScreen from '../screens/ObservationsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const MedicationsStack = createStackNavigator(
  {
    Medications: MedicationsScreen,
  },
  config
);

MedicationsStack.navigationOptions = {
  tabBarLabel: 'Medications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='md-medkit' />
  ),
};

MedicationsStack.path = '';

const ConditionsStack = createStackNavigator(
  {
    Conditions: ConditionsScreen,
  },
  config
);

ConditionsStack.navigationOptions = {
  tabBarLabel: 'Conditions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-heart' />
  ),
};

ConditionsStack.path = '';

const ObservationsStack = createStackNavigator(
  {
    Observations: ObservationsScreen,
  },
  config
);

ObservationsStack.navigationOptions = {
  tabBarLabel: 'Observations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-pulse' />
  ),
};

ConditionsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MedicationsStack,
  ConditionsStack,
  ObservationsStack,
});

tabNavigator.path = '';

export default tabNavigator;
