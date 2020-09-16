import React from 'react';

import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
    Header,
    HeadTitle,
    LogOut,
    Form,
    Info,
    Input,
    Line,
    Update,
    BTitle,
} from './styles';

import {Container} from '../../components/Background/styles';

import img from '../../assets/pictures/background.png';

export default function Profile() {
    return (
        <Container source={img}>
            <Header>
                <HeadTitle>My profile</HeadTitle>
                <LogOut onPress={() => Alert.alert('Logout!')}>
                    <Icon name="log-out" size={24} color="#FFFFFF" />
                </LogOut>
            </Header>

            <Form>
                <Info>
                    <Icon name="user" size={24} color="#FFFFFF" />
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        editable={false}
                        placeholder=" Name"
                        placeholderTextColor="#ffffff"
                    />
                </Info>
                <Info>
                    <Icon name="mail" size={24} color="#FFFFFF" />
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        editable={false}
                        placeholder=" Email"
                        placeholderTextColor="#ffffff"
                    />
                </Info>

                <Line />

                <Info>
                    <Icon name="lock" size={24} color="#FFFFFF" />
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder=" Current Password"
                        placeholderTextColor="#ffffff"
                    />
                </Info>
                <Info>
                    <Icon name="lock" size={24} color="#FFFFFF" />
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        placeholder=" New Password"
                        placeholderTextColor="#ffffff"
                    />
                </Info>
                <Info>
                    <Icon name="lock" size={24} color="#FFFFFF" />
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        placeholder=" Confirm Password"
                        placeholderTextColor="#ffffff"
                    />
                </Info>

                <Update onPress={() => Alert.alert('Update Sucessfull!')}>
                    <BTitle>Save changes</BTitle>
                </Update>
            </Form>
        </Container>
    );
}
