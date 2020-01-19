import {Navigation} from 'react-native-navigation';
import theme from './src/theme';
import screens from './src/screens';

import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {store} from './src/store';
import React from 'react';
for (const key in screens) {
  Navigation.registerComponent(
    screens[key].identifier,
    () => props => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {React.createElement(screens[key].component, props, null)}
        </ThemeProvider>
      </Provider>
    ),
    () => screens[key].component,
  );
}

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
