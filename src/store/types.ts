export interface State {
  chequings: number;
  savings: number;
  change: number[];
}

export interface AddChangeType {
  type: 'ADD_CHANGE';
  payload: 0.05 | 0.1 | 0.25 | 1 | 2 | 5 | 10 | 20 | 50 | 100;
}

export interface RemoveChangeType {
  type: 'REMOVE_CHANGE';
  payload: number;
}

export interface UpdateAccountType {
  type: 'UPDATE_ACCOUNT';
  payload: {
    account: 'savings' | 'chequings';
    amount: number;
  };
}

export type Types = AddChangeType | RemoveChangeType | UpdateAccountType;
