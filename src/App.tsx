import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from './components/header';
import Logo from './components/logo';
import styled, {ThemeProvider} from 'styled-components/native';
import theme from './theme';
import SubHeader from './components/Subheader';
import BigText from './components/BigText';

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Header />
      <Logo />
      <SafeAreaView>
        <Scroll contentInsetAdjustmentBehavior="automatic">
          <Balance>
            <SubHeader light={true}>Balance</SubHeader>
            <BigText>$1024.02</BigText>
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
