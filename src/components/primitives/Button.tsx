import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import Label from './Label';

interface IButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const Button: React.FC<IButtonProps> = ({title, onPress, style, variant}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style} variant={variant || 'primary'}>
        <CustomLabel variant={variant || 'primary'}>{title}</CustomLabel>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;

const Container = styled.View<{variant: 'primary' | 'secondary'}>`
  background-color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.action
      : props.theme.colors.white};
  padding: 5px 20px;
  border-radius: 3px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-offset: 0 2px;
  shadow-radius: 10px;
  align-items: center;
`;

const CustomLabel = styled(Label)<{variant: 'primary' | 'secondary'}>`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.white
      : props.theme.colors.black};
`;
