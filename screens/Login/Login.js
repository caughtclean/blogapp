import React from 'react';
import { Container, Text, TextInput } from '../../styles/';

export default function Login(props) {
  return (
    <Container>
      <Text h4>Sign in to start blogging</Text>
      <TextInput
        placeholder={'Email address'}
      />
      <TextInput
        placeholder={'Password'}
        secureTextEntry
      />
    </Container>
    );
}