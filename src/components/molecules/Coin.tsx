import React from 'react';
import styled from 'styled-components/native';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import Label from '../primitives/Label';

export type CoinType = 1 | 2 | 5 | 10 | 25;
interface IBillProps {
  type: CoinType;
  onPress?: () => void;
  style?: any;
}

function getFill(type: CoinType) {
  switch (type) {
    case 5:
      return ['#DEDEDE', '#F8F6FA', 48, 40];
    case 10:
      return ['#DEDEDE', '#F8F6FA', 41, 33];
    case 25:
      return ['#DEDEDE', '#F8F6FA', 54, 46];
    case 1:
      return ['#DBC97A', '#F1DF91', 62, 54];
    case 2:
      return ['#D5C29A', '#F8F6FA', 69, 49];
  }
}

const Coin: React.FC<IBillProps> = ({type, onPress}) => {
  const animatedValue = new Animated.Value(0);
  function animate(value: boolean) {
    Animated.timing(animatedValue, {
      duration: 200,
      toValue: value ? 1 : 0,
    }).start();
  }

  const fills = getFill(type);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => animate(true)}
      onPressOut={() => animate(false)}
      onPress={onPress}>
      <Container
        background={fills[1]}
        size={fills[2]}
        type={type}
        style={{
          shadowRadius: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 20],
          }),
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.04],
              }),
            },
          ],
        }}>
        <SmallerCircle size={fills[3] as number} fill={fills[0] as string}>
          <CustomLabel type={type}>
            {type < 5 ? '$' + type.toFixed(2) : type.toFixed(0)}
          </CustomLabel>
        </SmallerCircle>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Coin;

const Container = styled(Animated.View)<{
  background: string;
  type: CoinType;
  size: number;
}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100px;

  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-opacity: 0.1;

  margin: 0 10px 10px 0;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.background};
`;

const SmallerCircle = styled.View<{size: number; fill: string}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100px;
  background-color: ${props => props.fill};
  align-items: center;
  justify-content: center;
`;

const CustomLabel = styled(Label)<{type: CoinType}>`
  color: ${props => props.theme.colors.black};
  font-size: 14px;
`;
