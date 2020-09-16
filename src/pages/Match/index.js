import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {List, Item, Photo, Title} from './styles';

import {Container} from '../../components/Background/styles';

import api from '../../services/api';

import img from '../../assets/pictures/background.png';

export default function Match({navigation}) {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        api.get('foods').then((response) => {
            setFoods(response.data);
        });
    });

    const renderItem = ({item}) => (
        <Item
            onPress={() => {
                navigation.navigate('Food', {
                    name: item.description,
                    image: item.path,
                });
            }}>
            <Photo source={{uri: item.path}} />

            <Title>{item.description}</Title>
        </Item>
    );

    return (
        <Container source={img}>
            <List>
                <FlatList
                    data={foods}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </List>
        </Container>
    );
}
