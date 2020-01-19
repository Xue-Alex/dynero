export function number_crunch(dict_bills: any) {
  var current_balance = 0;
  if (dict_bills.account == 'chequing') {
    current_balance = dict_bills.accounts.chequing;
  } else if (dict_bills.account == 'saving') {
    current_balance = dict_bills.accounts.saving;
  }

  for (const key of Object.keys(dict_bills)) {
    if (key != 'accounts' && key != 'account') {
      current_balance -= dict_bills[key] * +key;
    }
  }
  var extra_costs = 5.65; //tax and delivery fee
  current_balance -= extra_costs;

  var accounts_dict = dict_bills.accounts;
  if (dict_bills.account == 'chequing') {
    accounts_dict.chequing = current_balance;
  } else if (dict_bills.account == 'saving') {
    accounts_dict.saving = current_balance;
  }

  if (current_balance < 0) {
    accounts_dict = null;
  }

  return {eta: 1 + Math.floor(Math.random() * 10), accounts_dict};
}
