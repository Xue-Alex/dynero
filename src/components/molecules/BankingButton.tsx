import React from 'react';
import styled from 'styled-components/native';
import ContainerButton from '../primitives/ContainerButton';

import {Dimensions} from 'react-native';
import SubHeader from '../primitives/Subheader';

interface IWithdrawalButtonProps {
  text: string;
  number: string;
  price: number;
  onPress?: () => void;
}
const BankingButton: React.FC<IWithdrawalButtonProps> = ({
  text,
  number,
  price,
  onPress,
}) => {
  return (
    <ContainerButton onPress={onPress}>
      <Container>
        <SubHeader light={false}>{number}</SubHeader>
        <DarkSubheader light={false}>{text}</DarkSubheader>
        <Price>${price.toFixed(2)}</Price>
      </Container>
    </ContainerButton>
  );
};

const Price = styled.Text`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const Container = styled.View`
  width: ${(Dimensions.get('screen').width * 0.8) / 2}px;
  height: ${(Dimensions.get('screen').width * 0.8) / 2}px;
  padding: 20px;
`;

const DarkSubheader = styled(SubHeader)`
  color: ${props => props.theme.colors.black};
`;

export default BankingButton;
