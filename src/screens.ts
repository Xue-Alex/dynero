import HomeScreen from './screens/HomeScreen';
import WithdrawalScreen from './screens/WithdrawalScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import PopupModal from './components/molecules/PopupModal';

const screens = {
  home: {
    identifier: 'Home',
    component: HomeScreen,
    props: {},
  },
  withdrawal: {
    identifier: 'Withdrawal',
    component: WithdrawalScreen,
    props: {},
  },
  popupModal: {
    identifier: 'PopupModal',
    component: PopupModal,
    props: {},
  },
  checkout: {
    identifier: 'Checkout',
    component: CheckoutScreen,
    props: {},
  },
};

export default screens;
