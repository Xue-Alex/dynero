import styled from 'styled-components/native';

const Header = styled.Text`
  font-size: 28px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.black};
`;

export default Header;
