import React, {useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Animated} from 'react-native';
import theme from '../../theme';

const PopupModal = ({
  Comp,
  passProps,
  componentId,
}: {
  Comp: any;
  passProps: any;
  componentId?: string;
}) => {
  const animatedState = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedState, {
      duration: 200,
      toValue: 1,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          opacity: animatedState,
        }}>
        <Popup
          style={{
            transform: [
              {
                translateY: animatedState.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['100%', '0%'],
                }),
              },
            ],
          }}>
          <Comp
            {...{
              ...passProps,
              parentComponentId: componentId,
              onCancel: () => {
                return new Promise(resolve =>
                  Animated.timing(animatedState, {
                    duration: 200,
                    toValue: 0,
                  }).start(() => {
                    resolve();
                  }),
                );
              },
            }}
          />
        </Popup>
      </Container>
    </ThemeProvider>
  );
};

export default PopupModal;

const Container = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Popup = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  padding: 10px;
`;
