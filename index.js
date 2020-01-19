import {Navigation} from 'react-native-navigation';
import theme from './src/theme';
import screens from './src/screens';

Navigation.registerComponent(
  screens.home.identifier,
  () => screens.home.component,
);

Navigation.registerComponent(
  screens.withdrawal.identifier,
  () => screens.withdrawal.component,
);

Navigation.registerComponent(
  screens.popupModal.identifier,
  () => screens.popupModal.component,
);
Navigation.registerComponent(
  screens.checkout.identifier,
  () => screens.checkout.component,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      backButton: {
        color: theme.colors.black,
        title: 'Back',
      },
      background: {
        color: theme.colors.white,
      },
      noBorder: true,
    },
    bottomTabs: {
      visible: true,
      drawBehind: false,
      backgroundColor: theme.colors.white,
    },
    bottomTab: {
      iconColor: theme.colors.black,
      textColor: theme.colors.black,
      selectedIconColor: theme.colors.action,
      selectedTextColor: theme.colors.action,
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: bottomTabs,
    },
  });
});

const bottomTabs = {
  id: 'BottomTabs',
  children: [
    {
      stack: {
        children: [
          {
            component: {
              name: screens.home.identifier,
            },
          },
        ],
        options: {
          bottomTab: {
            text: 'Home',
            icon: require('./assets/homeIcon.png'),
          },
        },
      },
    },
  ],
};
