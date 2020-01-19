import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../theme';
import SmallTopHeader from '../components/primitives/SmallTopHeader';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../components/primitives/logo';
import SubHeader from '../components/primitives/Subheader';
import Header from '../components/primitives/Header';
import Label from '../components/primitives/Label';
import Bill, {BillType} from '../components/molecules/Bill';
import {Navigation} from 'react-native-navigation';
import screens from '../screens';
import CustomBillInput from '../components/molecules/CustomBillInput';
import Coin from '../components/molecules/Coin';
import TotalView from '../components/molecules/TotalView';

const WithdrawalScreen: React.FC<{}> = () => {
  const handleBill = (bill: BillType) => {};
  const handleCustomBill = () => {
    Navigation.showOverlay({
      component: {
        name: screens.popupModal.identifier,
        passProps: {
          Comp: CustomBillInput,
          passProps: {
            onSave: (value: string) => saveCustomBill(value),
          },
        },
      },
    });
  };

  function saveCustomBill(value: string) {}

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <Scroll>
          <HeaderView>
            <ETAView>
              <SubHeader light={false}>ETA</SubHeader>
              <NumberText>7 mins</NumberText>
            </ETAView>
            <BalanceView>
              <SubHeader light={false}>Remaining Balance</SubHeader>
              <NumberText>$1,020.09</NumberText>
            </BalanceView>
          </HeaderView>

          <WithdrawalHeader>Make a Withdrawal</WithdrawalHeader>
          <Label>Choose Bills and Coins</Label>

          <BillContainer>
            <BillWithMargin
              type={'custom'}
              onPress={() => handleCustomBill()}
            />
            <BillWithMargin type={100} onPress={() => handleBill(100)} />
            <BillWithMargin type={50} onPress={() => handleBill(50)} />
            <BillWithMargin type={20} onPress={() => handleBill(20)} />
            <BillWithMargin type={10} onPress={() => handleBill(10)} />
            <BillWithMargin type={5} onPress={() => handleBill(10)} />
          </BillContainer>

          <CoinsContainer>
            <Coin type={2} />
            <Coin type={1} />
            <Coin type={25} />
            <Coin type={10} />
            <Coin type={5} />
          </CoinsContainer>

          <TotalView />
        </Scroll>
        <SmallTopHeader />
        <CustomLogo />
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

const CustomLogo = styled(Logo)`
  position: absolute;
  top: -40%;
  transform: scale(0.3)
  left: 0;
`;

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ETAView = styled.View``;
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

const BillContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 0;
`;

const BillWithMargin = styled(Bill)`
  margin-right: 10px;
`;

const CoinsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0 30px;
`;

export default WithdrawalScreen;
