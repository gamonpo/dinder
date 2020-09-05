import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
    flex: 1;
    justify-content: center;
`;

export const List = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const Item = styled.TouchableOpacity`
    width: 200px;
    height: 200px;
    background: #ffffff;
    margin: 4px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Photo = styled.Image`
    width: 200px;
    height: 150px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #2d0c57;
    padding: 8px;
    font-weight: bold;
`;
