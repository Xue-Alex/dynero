import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface IButtonProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const BackButton: React.FC<IButtonProps> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FlexView>
        <Arrow />
        <Container style={style}>{title}</Container>
      </FlexView>
    </TouchableOpacity>
  );
};

export default BackButton;

const Container = styled.Text`
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.white};
  z-index: 100;
  font-family: ${props => props.theme.fonts.main};
  font-size: 18px;
  margin: 0 0 0 3px;
`;

const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Arrow = () => {
  return (
    <Svg width="8.244" height="15.074" viewBox="0 0 8.244 15.074">
      <Path
        id="Path_10"
        data-name="Path 10"
        d="M1539.771,23l-7.184,7.184,7.184,7.184"
        transform="translate(-1531.88 -22.646)"
        fill="none"
        stroke="#fff"
        stroke-width="1"
      />
    </Svg>
  );
};
