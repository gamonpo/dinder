import React from 'react';

import {Background, Form, Input, Iconn, Email, Button, BTitle} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import back from '../../assets/pictures/food.png';

export default function Login({navigation}) {
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

                <Button onPress={() => navigation.navigate('Menu')}>
                    <BTitle>Enter</BTitle>
                </Button>
            </Form>
        </Background>
    );
}
