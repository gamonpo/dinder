import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const Header = styled.View`
    padding-top: ${statusBarHeight + 'px'};
    align-items: center;
    flex-direction: row;
    align-self: center;
    margin: 4px;
`;

export const HeadTitle = styled.Text`
    flex-grow: 0.9;
    font-size: 24px;
    font-family: Roboto-Regular;
    color: #ffffff;
`;

export const LogOut = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const Form = styled.View`
    flex-direction: column;
    padding-top: ${3 * statusBarHeight + 'px'};
    align-self: center;
`;

export const Info = styled.View`
    background: #4d3f3f3f;
    width: 350px;
    height: 50px;
    margin: 5px;
    border-radius: 8px;
    align-items: center;
    flex-direction: row;
    padding: 5px;
`;

export const Input = styled.TextInput`
    margin-left: 5px;
    width: 300px;
    height: 50px;
    font-family: Roboto-Regular;
    font-size: 17px;
    color: #ffffff;
`;

export const Line = styled.View`
    height: 1px;
    background: rgba(255, 255, 255, 1);
    margin: 20px 0 30px;
`;

export const Update = styled.TouchableOpacity`
    width: 350px;
    height: 50px;
    background: rgba(233, 102, 41, 1);
    align-self: center;
    margin-top: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const BTitle = styled.Text`
    font-size: 15px;
    font-family: Roboto-Regular;
    color: #ffffff;
`;
