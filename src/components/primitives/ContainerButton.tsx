import React from 'react';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback, Animated} from 'react-native';

interface IContainerButtonProps {
  children: any;
  onPress?: () => void;
}
const ContainerButton: React.FC<IContainerButtonProps> = ({
  children,
  onPress,
}) => {
  const animatedValue = new Animated.Value(0);
  function animate(value: boolean) {
    Animated.timing(animatedValue, {
      duration: 200,
      toValue: value ? 1 : 0,
    }).start();
  }
  return (
    <TouchableWithoutFeedback
      onPressIn={() => animate(true)}
      onPressOut={() => animate(false)}
      onPress={onPress}>
      <Container
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
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled(Animated.View)`
  margin: 5px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-opacity: 0.1;
`;

export default ContainerButton;
