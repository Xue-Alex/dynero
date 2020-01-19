import styled from 'styled-components/native';

const BigText = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.black};
`;

export default BigText;
