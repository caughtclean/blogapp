import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from './styles/grid';
import { StackNavigator } from 'react-navigation';
import Login from './screens/Login/Login';
import Blogs from './screens/Blogs/Blogs';

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
      title: 'Login',
      headerRight: (<Button
       title={'New'}
       onPress={() => navigation.navigate('Login')}
       />)
      };
    },
  },
  Blogs: {
    screen: Blogs,
    navigationOptions: {
      title: 'Blogs'
    },
  },

});


