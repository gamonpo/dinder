import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Form = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;

export const Email = styled.TextInput`
  width: 300px;
  border-radius: 6px;
  background: #eee;
  margin: 10px;
  background: #4d3f3f3f;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
`;

export const Password = styled.TextInput`
  width: 300px;
  border-radius: 6px;
  background: #4d3f3f3f;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
`;
