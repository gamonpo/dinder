import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const Container = styled.View`
    flex: 1;
    background: tomato;
`;

export const Head = styled.View`
    margin-top: ${statusBarHeight + 'px'};
    align-items: center;
`;

export const Header = styled.Text`
    font-size: 36px;
    font-family: Roboto-Light;
    color: #ffffff;
`;
