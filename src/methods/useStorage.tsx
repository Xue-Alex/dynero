import {AsyncStorage} from 'react-native';

let state = {
  chequing: 1829.12,
  saving: 2138.82,
  subtotal: 0,
};

export const getState = () => {
  return {...state};
};

export async function saveState(values: {
  chequing?: number;
  saving?: number;
  subtotal?: number;
}) {
  if (values.chequing) {
    await AsyncStorage.setItem('chequing', values.chequing + '');
    state.chequing = values.chequing;
  }
  if (values.saving) {
    await AsyncStorage.setItem('saving', values.saving + '');
    state.saving = values.saving;
  }
  if (values.subtotal) {
    await AsyncStorage.setItem('subtotal', values.subtotal + '');
    state.subtotal = values.subtotal;
  }
  return getState();
}

export async function initialLoad() {
  const che = await AsyncStorage.getItem('chequing');
  const sav = await AsyncStorage.getItem('saving');

  if (che) {
    state.chequing = parseFloat(che);
  } else {
    await AsyncStorage.setItem('chequing', state.chequing + '');
  }
  if (sav) {
    state.saving = parseFloat(sav);
  } else {
    await AsyncStorage.setItem('saving', state.saving + '');
  }

  await AsyncStorage.setItem('subtotal', 0 + '');
  return getState();
}
