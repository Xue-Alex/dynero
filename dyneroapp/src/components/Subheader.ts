import styled from 'styled-components/native';

const SubHeader = styled.Text<{light: boolean}>`
  font-size: 18px;
  color: ${props =>
    props.light ? props.theme.colors.lightGray : props.theme.colors.gray};
  font-family: Nunito-Sans;
`;

export default SubHeader;
