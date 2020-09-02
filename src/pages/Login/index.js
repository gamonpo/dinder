import React from 'react';

import {Background, Form, Email, Password} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import back from '../../assets/food.png';

export default function Login() {
  return (
    <Background source={back}>
      {/* <Form>
        <Email />
        <Password />
      </Form> */}

      <Icon name="rocket" size={190} color="#900" />
    </Background>
  );
}
