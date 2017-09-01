// things related to forms goes heres
import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { blue, gray, h1FontSize, h2FontSize, h3FontSize, h4FontSize } from './variables';

export const TextInput = styled.TextInput`
  padding-vertical: 5px;
    ${({ h1 }) => h1 && css`
  font-size: ${h1FontSize};
`}
  ${({ h2 }) => h2 && css`
  font-size: ${h2FontSize};
`}
  ${({ h3 }) => h3 && css`
  font-size: ${h3FontSize};
`}
  ${({ h4 }) => h4 && css`
  font-size: ${h4FontSize};
`}

`;


export const FormControl = styled.View`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.View`
  padding-vertical: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  ${({ info }) => info && css`
    background-color: ${ blue };
  `}
`;
const ButtonText = styled.Text`
  color: white;
`;
export const Button = ({ title, onPress, ...rest }) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonWrapper {...rest}>
      <ButtonText>
        {title}
      </ButtonText>
    </ButtonWrapper>
  </TouchableOpacity>
  );

export const Seperator = styled.View`
  height: 1px;
  border-top-width: 1px;
  border-top-color: ${gray};
  margin-top: 16px;
  margin-bottom: 16px;
`