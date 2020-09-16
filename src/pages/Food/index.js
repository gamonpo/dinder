import React from 'react';

import {Container, Head, Header, Goback, Info, Title, Image} from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default function Food({route, navigation}) {
    const {name, image} = route.params;

    return (
        <Container>
            <Head>
                <Goback onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="black" />
                </Goback>
                <Header>Food</Header>
            </Head>
            <Info>
                <Image source={{uri: image}} />

                <Title>{name}</Title>
            </Info>
        </Container>
    );
}
