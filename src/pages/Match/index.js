import React from 'react';
import {FlatList} from 'react-native';

import {List, Item, Photo, Title} from './styles';

import {Container} from '../../components/Background/styles';

import img from '../../assets/pictures/background.png';
import vegetables from '../../assets/pictures/vegetables.png';
import bread from '../../assets/pictures/bread.png';
import fruits from '../../assets/pictures/fruits.png';
import coffee from '../../assets/pictures/coffee.png';
import tea from '../../assets/pictures/tea.png';
import sweet from '../../assets/pictures/sweet.png';
import spice from '../../assets/pictures/spice.png';
import egg from '../../assets/pictures/egg.png';
import meat from '../../assets/pictures/meat.png';
import cheese from '../../assets/pictures/cheese.png';

export default function Match({navigation}) {
    const food = [
        {
            id: '1',
            image: vegetables,
            description: 'Vegetables',
        },
        {
            id: '2',
            image: fruits,
            description: 'Fruits',
        },
        {
            id: '3',
            image: bread,
            description: 'Bread',
        },
        {
            id: '4',
            image: sweet,
            description: 'Sweet',
        },
        {
            id: '5',
            image: tea,
            description: 'Tea',
        },
        {
            id: '6',
            image: cheese,
            description: 'Cheese',
        },
        {
            id: '7',
            image: spice,
            description: 'Spice',
        },
        {
            id: '8',
            image: coffee,
            description: 'Coffe',
        },
        {
            id: '9',
            image: egg,
            description: 'Egg',
        },
        {
            id: '10',
            image: meat,
            description: 'Meat',
        },
    ];

    const renderItem = ({item}) => (
        <Item
            onPress={() => {
                navigation.navigate('Food', {
                    name: item.description,
                    image: item.image,
                });
            }}>
            <Photo source={item.image} />

            <Title>{item.description}</Title>
        </Item>
    );

    return (
        <Container source={img}>
            <List>
                <FlatList
                    data={food}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </List>
        </Container>
    );
}
