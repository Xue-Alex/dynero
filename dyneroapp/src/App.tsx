import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Header from './components/header';
import Logo from './components/logo';
import styled, {ThemeProvider} from 'styled-components/native';
import theme from './theme';

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Header />
      <Logo />
      <SafeAreaView>
        <Scroll contentInsetAdjustmentBehavior="automatic">
          <Balance>
            <Text>Balance</Text>
            <Text>B</Text>
          </Balance>
        </Scroll>
      </SafeAreaView>
    </ThemeProvider>
  );
};
const Scroll = styled.ScrollView`
  margin-top: 30%;
  margin-left: 5%;
`;
const Balance = styled.View``;

export default App;
