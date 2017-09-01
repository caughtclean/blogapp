import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from './styles/grid';
import { StackNavigator } from 'react-navigation';
import Login from './screens/Login/Login';
import Blogs from './screens/Blogs/Blogs';
import NewBlog from './screens/NewBlog/NewBlog';

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Blogs: {
    screen: Blogs,
    navigationOptions: ({ navigation }) => {
      return {
      title: 'Blogs',
      headerRight: (<Button
       title={'New'}
       onPress={() => navigation.navigate('NewBlog')}
       />)
      };
    },
  },
  NewBlog: {
    screen: NewBlog,
    navigationOptions: {
      title: 'NewBlog'
    }
  },

}, {
  intialRouteName: 'NewBlog'

});


