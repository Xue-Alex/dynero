import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../theme';
import SmallTopHeader from '../components/primitives/SmallTopHeader';
import {StatusBar, View} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../components/primitives/logo';
import SubHeader from '../components/primitives/Subheader';
import Header from '../components/primitives/Header';
import Label from '../components/primitives/Label';
import {Navigation} from 'react-native-navigation';
import screens from '../screens';
import BackButton from '../components/primitives/BackButton';
import BankingButton from '../components/molecules/BankingButton';

const CheckoutScreen: React.FC<{componentId?: string}> = ({componentId}) => {
  const [bankingSelected, setBankingSelected] = useState('chequings');
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <Scroll>
          <HeaderView>
            <Title>Checkout</Title>
            <ETAView>
              <SubHeader light={false}>ETA</SubHeader>
              <NumberText>7 mins</NumberText>
            </ETAView>
          </HeaderView>

          <BankingContainer>
            <BankingButton
              text="Chequing"
              number="#12345"
              price={123.81}
              highlighted={bankingSelected === 'chequings'}
              onPress={() => setBankingSelected('chequings')}
            />
            <BankingButton
              text="Savings"
              number="#28172"
              price={123.81}
              highlighted={bankingSelected === 'savings'}
              onPress={() => setBankingSelected('savings')}
            />
          </BankingContainer>

          <BalanceView>
            <SubHeader light={false}>Remaining Balance</SubHeader>
            <NumberText>$1,020.09</NumberText>
          </BalanceView>

          <WithdrawalHeader>Make a Withdrawal</WithdrawalHeader>
          <Label>Choose Bills and Coins</Label>
        </Scroll>
        <SmallTopHeader />
        <TopBarView>
          <BackButton
            title="Back"
            onPress={() => Navigation.pop(componentId || '')}
          />
          <CustomLogo />
        </TopBarView>
      </SafeArea>
    </ThemeProvider>
  );
};

const SafeArea = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.sandy};
`;

const Scroll = styled.ScrollView`
  height: 100%;
  padding: 75px 5% 0;
`;

const TopBarView = styled.View`
  position: absolute;
  background-color: rgba(0, 23, 102, 0.2);
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 0 0 5%;
  flex-direction: row;
  justify-content: space-between;
`;
const CustomLogo = styled(Logo)`
  transform: scale(0.3);
  margin: 7px 0 0 -100%;
`;

const Title = styled(Header)`
  color: ${props => props.theme.colors.primary};
`;
const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ETAView = styled.View``;

const BankingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0;
`;
const BalanceView = styled.View`
  align-items: flex-end;
`;

const NumberText = styled(Header)`
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.primary};
`;

const WithdrawalHeader = styled(Header)`
  color: ${props => props.theme.colors.black};
  margin: 20px 0 10px;
`;

export default CheckoutScreen;
