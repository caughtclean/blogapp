import React from 'react';
import { Text, TextInput, FormControl, Button } from '../../styles/';
import { Title, LoginWrapper, FormContainer } from './Login.style';

export default function Login(props) {
  return (
    <LoginWrapper>
      <Title h4>Sign in to start blogging</Title>
        <FormControl>
          <TextInput
            placeholder={'Email address'}
            keyboardType={'email-address'}
          />
        </FormControl>
        <FormControl>
          <TextInput
            placeholder={'Password'}
            secureTextEntry
          />
        </FormControl>
      <Button info title={'Login'}/>
    </LoginWrapper>
    );
}