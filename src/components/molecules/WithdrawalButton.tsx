import React from 'react';
import styled from 'styled-components/native';
import ContainerButton from '../primitives/ContainerButton';

import {Dimensions} from 'react-native';

interface IWithdrawalButtonProps {
  text: string;
  withdraw: boolean;
  onPress: () => void;
}
const WithdrawalButton: React.FC<IWithdrawalButtonProps> = ({
  text,
  withdraw,
  onPress,
}) => {
  return (
    <ContainerButton onPress={onPress}>
      <Container>
        <CustomText withdraw={withdraw}>{text}</CustomText>
        <Icon
          withdraw={withdraw}
          source={require('../../../assets/withdraw-icon.png')}
        />
      </Container>
    </ContainerButton>
  );
};

const CustomText = styled.Text<{withdraw: boolean}>`
  font-family: ${props => props.theme.fonts.main};
  color: ${props =>
    props.withdraw ? props.theme.colors.red : props.theme.colors.green};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  align-self: flex-end;
`;

const Container = styled.View`
  width: ${(Dimensions.get('screen').width * 0.8) / 2}px;
  height: ${(Dimensions.get('screen').width * 0.8) / 2}px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.Image<{withdraw: boolean}>`
  align-self: flex-start;
  ${props =>
    props.withdraw
      ? ''
      : `
        transform: rotate(180deg)
        tint-color: ${props.theme.colors.green}
    `}
`;

export default WithdrawalButton;
