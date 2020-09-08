import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Login from './pages/Login';
import Home from './pages/Home';
import Match from './pages/Match';
import Profile from './pages/Profile';

function Menu() {
    const {Navigator, Screen} = createBottomTabNavigator();

    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#ffffff',
                    borderTopWidth: 0,
                    height: 60,
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Roboto-Regular',
                    fontSize: 11,
                    marginTop: 5,
                },
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'List') {
                        iconName = focused ? 'list' : 'list';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'user' : 'user';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
            <Screen name="Home" component={Home} />
            <Screen name="List" component={Match} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    );
}

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Login" component={Login} />
                <Screen name="Menu" component={Menu} />
            </Navigator>
        </NavigationContainer>
    );
}
