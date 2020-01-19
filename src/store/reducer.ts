import {State, Types} from './types';

const initialState: State = {
  savings: 1923.23,
  chequings: 812.34,
  change: [],
};

export default function(state = initialState, action: Types): State {
  switch (action.type) {
    case 'ADD_CHANGE':
      const newChange = [...state.change, action.payload];
      newChange.sort((a, b) => b - a);
      return {
        ...state,
        change: newChange,
      };
    case 'REMOVE_CHANGE':
      return {
        ...state,
        change: state.change.filter((val, i) => i !== action.payload),
      };
    case 'UPDATE_ACCOUNT':
      const account = action.payload.account;
      return {
        ...state,
        [account]: action.payload.amount,
      };
  }
}
