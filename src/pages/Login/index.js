import React from 'react';

import {Alert} from 'react-native';

import {Background, Form, Input, Iconn, Email, Button, BTitle} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import back from '../../assets/food.png';

export default function Login() {
    return (
        <Background source={back}>
            <Form>
                <Input>
                    <Iconn>
                        <Icon name="user" size={20} color="#eee" />
                    </Iconn>

                    <Email placeholder="Email" placeholderTextColor="#ffffff" />
                </Input>

                <Input>
                    <Iconn>
                        <Icon name="lock" size={20} color="#eee" />
                    </Iconn>

                    <Email
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                    />
                </Input>

                <Button onPress={() => Alert.alert('Welcome!')}>
                    <BTitle>Entre</BTitle>
                </Button>
            </Form>
        </Background>
    );
}
