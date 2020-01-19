import styled from 'styled-components/native';

const SubHeader = styled.Text<{light: boolean}>`
  font-size: 18px;
  color: ${props =>
    props.light ? props.theme.colors.lightGray : props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.black};
`;

export default SubHeader;
