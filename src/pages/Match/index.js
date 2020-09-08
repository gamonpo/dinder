import React from 'react';
import {Alert} from 'react-native';

import {Background, List, Item, Photo, Title} from './styles';

import background from '../../assets/pictures/background.png';
import vegetables from '../../assets/pictures/vegetables.png';
import bread from '../../assets/pictures/bread.png';
import fruits from '../../assets/pictures/fruits.png';

export default function Match() {
    return (
        <Background source={background}>
            <List>
                <Item onPress={() => Alert.alert('Vegetables!')}>
                    <Photo source={vegetables} />

                    <Title>Vegetables</Title>
                </Item>

                <Item onPress={() => Alert.alert('Fruits!')}>
                    <Photo source={fruits} />

                    <Title>Fruits</Title>
                </Item>

                <Item onPress={() => Alert.alert('Bread!')}>
                    <Photo source={bread} />

                    <Title>Bread</Title>
                </Item>
            </List>
        </Background>
    );
}
