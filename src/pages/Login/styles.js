import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
    flex: 1;
`;

export const Form = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
`;

export const Input = styled.View`
    height: 42px;
    width: 350px;
    flex-direction: row;
    align-items: center;
    background: #4d3f3f3f;
    border-radius: 6px;
    border: 1px #3f3f3f;
    margin: 10px;
`;

export const Iconn = styled.View`
    padding: 10px;
    background: #3f3f3f;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const Email = styled.TextInput`
    padding-left: 15px;
    width: 313px;
    color: #fff;
`;

export const Password = styled.TextInput`
    width: 313px;
    color: #fff;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 50px;
    width: 250px;
    height: 40px;
    background: #9c9481;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;

export const BTitle = styled.Text`
    color: #fff;
    font-size: 17px;
`;
