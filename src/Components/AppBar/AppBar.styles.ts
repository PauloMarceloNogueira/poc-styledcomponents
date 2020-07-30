import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 36px 16px 0;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryToBlack}
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black}
  font-size: 18px;
  font-weight: 600;
`