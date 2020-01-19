import React from 'react';
import styled from 'styled-components/native';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Label from '../primitives/Label';

export type BillType = 5 | 10 | 20 | 50 | 100 | 'custom';
interface IBillProps {
  type: BillType;
  onPress?: () => void;
  style?: any;
  minus?: boolean;
}

function getFill(type: BillType) {
  switch (type) {
    case 5:
      return ['#88A4CB', '#728EB9'];
    case 10:
      return ['#978BAC', '#84749F'];
    case 20:
      return ['#92B386', '#84A878'];
    case 50:
      return ['#CA9D82', '#BF8C6C'];
    case 100:
      return ['#CAB87C', '#BEAA61'];
    case 'custom':
      return ['white', '#EFEFEF'];
  }
}

const Bill: React.FC<IBillProps> = ({type, onPress, minus}) => {
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
        background={fills[0]}
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
        <Outline fill={fills[1]} />
        {minus && (
          <MinusButton>
            <Line />
          </MinusButton>
        )}
        <CustomLabel type={type}>
          {type === 'custom' ? 'Custom' : '$' + type.toFixed(0)}
        </CustomLabel>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Bill;
const Container = styled(Animated.View)<{background: string; type: BillType}>`
  width: 100px;
  height: 60px;
  border-radius: 3px;

  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;

  margin: 0 10px 10px 0;

  background-color: ${props => props.background};
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5px;
`;

const CustomLabel = styled(Label)<{type: BillType}>`
  color: ${props =>
    props.type === 'custom'
      ? props.theme.colors.black
      : props.theme.colors.white};
`;

const Outline = ({fill}: {fill: string}) => {
  return (
    <OutlineSvg width="100.002" height="49.02" viewBox="0 0 100.002 49.02">
      <Path
        id="Path_11"
        data-name="Path 11"
        d="M1631.664,209.649l-53.2,10.531-46.805,23.911v-46.02a3.348,3.348,0,0,1,.8-2.184,2.4,2.4,0,0,1,1.678-.816h95.042a2.221,2.221,0,0,1,1.854,1.019,3.54,3.54,0,0,1,.625,1.981Z"
        transform="translate(-1531.663 -195.07)"
        fill={fill}
      />
    </OutlineSvg>
  );
};

const OutlineSvg = styled(Svg)`
  position: absolute;
  top: 0;
`;

const MinusButton = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.red};
  position: absolute;
  left: -10px;
  top: -10px;
  align-items: center;
  justify-content: center;
`;

const Line = styled.View`
  width: 7px;
  height: 2px;
  background-color: ${props => props.theme.colors.white};
`;
