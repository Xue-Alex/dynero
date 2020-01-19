import React, {useState} from 'react';
import SmallTopHeader from '../components/primitives/SmallTopHeader';
import {StatusBar, View} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../components/primitives/logo';
import SubHeader from '../components/primitives/Subheader';
import Header from '../components/primitives/Header';
import Label from '../components/primitives/Label';
import {Navigation} from 'react-native-navigation';
import BackButton from '../components/primitives/BackButton';
import BankingButton from '../components/molecules/BankingButton';
import BigText from '../components/primitives/BigText';
import Button from '../components/primitives/Button';
import {getState, saveState} from '../methods/useStorage';

const CheckoutScreen: React.FC<{componentId?: string}> = ({componentId}) => {
  const [bankingSelected, setBankingSelected] = useState('chequings');
  const [state, setState] = useState(getState());

  function onPress() {
    console.log('opacity');
    if (bankingSelected === 'chequings') {
      saveState({
        ...state,
        chequing: state.chequing - 5.65 - state.subtotal,
        subtotal: 0,
      }).then(s => {
        setState(s);
        Navigation.popToRoot(componentId + '');
      });
    }

    if (bankingSelected === 'savings') {
      saveState({
        ...state,
        saving: state.saving - 5.65 - state.subtotal,
        subtotal: 0,
      }).then(s => {
        setState(s);
        Navigation.popToRoot(componentId + '');
      });
    }
  }
  return (
    <>
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
              price={state.chequing}
              highlighted={bankingSelected === 'chequings'}
              onPress={() => setBankingSelected('chequings')}
            />
            <BankingButton
              text="Savings"
              number="#28172"
              price={state.saving}
              highlighted={bankingSelected === 'savings'}
              onPress={() => setBankingSelected('savings')}
            />
          </BankingContainer>

          <CheckoutGrid>
            <Row>
              <Label>Withdrawing</Label>
              <WithdrawPriceText>
                ${state.subtotal.toFixed(2)}
              </WithdrawPriceText>
            </Row>
            <Row>
              <Label>Delivery Fee</Label>
              <Label style={{fontWeight: '400', marginTop: 10}}>$5.00</Label>
            </Row>
            <Row>
              <Label>Tax</Label>
              <Label style={{fontWeight: '400'}}>$0.65</Label>
            </Row>
            <Row style={{marginTop: 20}}>
              <Label>Total</Label>
              <Label>${5.65 + state.subtotal}</Label>
            </Row>
          </CheckoutGrid>

          <BalanceView style={{marginTop: 20}}>
            <SubHeader light={false}>Remaining Account Balance</SubHeader>
            <NumberText>
              $
              {(
                (bankingSelected === 'chequings'
                  ? state.chequing
                  : state.saving) -
                5.65 -
                state.subtotal
              ).toFixed(2)}
            </NumberText>
          </BalanceView>

          <BalanceView style={{marginTop: 10}}>
            <SubHeader light={false}>Remaining Total Balance</SubHeader>
            <NumberText>
              $
              {(state.chequing + state.saving - 5.65 - state.subtotal).toFixed(
                2,
              )}
            </NumberText>
          </BalanceView>
          <View style={{height: 100}} />
        </Scroll>
        <Button
          title="Confirm"
          style={{position: 'absolute', bottom: 15, right: '5%'}}
          onPress={onPress}
        />
        <SmallTopHeader />
        <TopBarView>
          <BackButton
            title="Back"
            onPress={() => Navigation.pop(componentId || '')}
          />
          <CustomLogo />
        </TopBarView>
      </SafeArea>
    </>
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
  align-items: flex-start;
`;

const NumberText = styled(Header)`
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.primary};
`;

const CheckoutGrid = styled.View`
  width: 70%;
  margin: 20px 0 0;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WithdrawPriceText = styled(BigText)`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

export default CheckoutScreen;
