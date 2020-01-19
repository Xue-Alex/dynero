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
import Bill, {BillType} from '../components/molecules/Bill';
import {Navigation} from 'react-native-navigation';
import screens from '../screens';
import CustomBillInput from '../components/molecules/CustomBillInput';
import Coin from '../components/molecules/Coin';
import TotalView from '../components/molecules/TotalView';
import BackButton from '../components/primitives/BackButton';

const WithdrawalScreen: React.FC<{componentId?: string}> = ({componentId}) => {
  const [change, setChange] = useState(new Array<number>());
  const handleBill = (bill: BillType) => {
    let arr = [...change, bill as number];
    arr.sort((a, b) => b - a);
    setChange(arr);
  };
  const handleCoin = (coin: number) => {
    let arr = [...change, coin];
    arr.sort((a, b) => b - a);
    setChange(arr);
  };
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
            <Coin type={2} onPress={() => handleCoin(2)} />
            <Coin type={1} onPress={() => handleCoin(1)} />
            <Coin type={25} onPress={() => handleCoin(0.25)} />
            <Coin type={10} onPress={() => handleCoin(0.1)} />
            <Coin type={5} onPress={() => handleCoin(0.05)} />
          </CoinsContainer>

          <TotalView
            change={change}
            remove={index => setChange(change.filter((v, i) => i !== index))}
            onNext={() =>
              Navigation.push(componentId || '', {
                component: {
                  name: screens.checkout.identifier,
                },
              })
            }
          />
          <View style={{height: 100}} />
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
