import styled from 'styled-components/native';

const Label = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export default Label;
