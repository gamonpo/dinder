import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const List = styled.View`
    padding-top: ${statusBarHeight + 'px'};
    align-items: center;
`;

export const Item = styled.TouchableOpacity`
    width: 170px;
    height: 170px;
    background: #ffffff;
    margin: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Photo = styled.Image`
    width: 170px;
    height: 120px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #2d0c57;
    padding: 8px;
    font-weight: bold;
`;
