import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Logo from '../components/primitives/logo';
import styled from 'styled-components/native';
import SubHeader from '../components/primitives/Subheader';
import BigText from '../components/primitives/BigText';
import TopHeader from '../components/primitives/TopHeader';
import Header from '../components/primitives/Header';
import WithdrawalButton from '../components/molecules/WithdrawalButton';
import BankingButton from '../components/molecules/BankingButton';
import {Navigation} from 'react-native-navigation';
import screens from '../screens';
import {getState, initialLoad} from '../methods/useStorage';

const HomeScreen: React.FC<{componentId: string}> = ({componentId}) => {
  const [state, setState] = useState(getState());
  useEffect(() => {
    initialLoad().then(s => setState(s));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const makeWithdrawal = () => {
    Navigation.push(componentId, {
      component: {
        name: screens.withdrawal.identifier,
      },
    });
  };

  console.log(state);

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeArea>
        <TopHeader />
        <Scroll contentInsetAdjustmentBehavior="automatic">
          <CustomLogo />
          <Balance>
            <SubHeader light={true}>Balance</SubHeader>
            <BigText>${(state.chequing + state.saving).toFixed(2)}</BigText>
          </Balance>

          <TransactionsHeaderContainer>
            <TransactionsHeader>Transactions</TransactionsHeader>
            <Container2>
              <SubHeader light>ETA</SubHeader>
              <BigText>7 mins</BigText>
            </Container2>
          </TransactionsHeaderContainer>
          <WithdrawButtonContainer>
            <WithdrawalButton
              text="Make a Withdrawal"
              withdraw
              onPress={() => makeWithdrawal()}
            />
            <WithdrawalButton
              text="Make a Deposit"
              withdraw={false}
              onPress={() => makeWithdrawal()}
            />
          </WithdrawButtonContainer>

          <BankingHeader>Banking Accounts</BankingHeader>

          <BankingContainer>
            <BankingButton
              text="Chequing"
              number="#12345"
              price={state.chequing}
            />
            <BankingButton
              text="Savings"
              number="#28172"
              price={state.saving}
            />
          </BankingContainer>
        </Scroll>
      </SafeArea>
    </>
  );
};

const CustomLogo = styled(Logo)`
  position: absolute;
  left: -15%;
  top: -55%;
  transform: scale(0.7);
`;

const SafeArea = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.sandy};
`;
const Scroll = styled.ScrollView`
  padding: 27% 5% 0;
  height: 100%;
`;
const Balance = styled.View``;

const TransactionsHeader = styled(Header)`
  margin-top: 40px;
`;

const TransactionsHeaderContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Container2 = styled.View`
  align-items: flex-end;
`;

const WithdrawButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const BankingHeader = styled(Header)`
  color: ${props => props.theme.colors.black};
  margin: 40px 0 20px;
`;

const BankingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default HomeScreen;
