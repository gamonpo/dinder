import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const Container = styled.View`
    flex: 1;
    background: #ffe9e6;
`;

export const Head = styled.View`
    padding-top: ${statusBarHeight + 'px'};
    align-items: center;
    flex-direction: row;
`;

export const Goback = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.Text`
    flex-grow: 0.9;
    font-family: Roboto-Regular;
    font-size: 22px;
    text-align: center;
`;

export const Info = styled.View`
    padding-top: ${2 * statusBarHeight + 'px'};
`;

export const Image = styled.Image`
    width: 400px;
    height: 300px;
`;

export const Title = styled.Text`
    font-family: Roboto-Light;
    font-size: 22px;
    padding: 20px;
`;
