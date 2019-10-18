import React, { Component } from 'react';
import uuid from 'uuid';
// import transaction from '../transactions.json';
import Controls from './controls/Controls';
import Balance from './balance/Balance';
import TransactionHistory from './transactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    transaction: [],
    balance: {
      Deposit: 0,
      Withdrawal: 0,
      balance: 0,
    },
  };

  handleClick = async amount => {
    const newOperation = { ...amount, id: uuid.v4() };
    await this.setState(state => ({
      transaction: [...state.transaction, newOperation],
    }));
    const { transaction } = this.state;
    const updBalance = this.getValues(transaction);
    this.setState(state => ({ ...state, balance: updBalance }));
  };

  getValues = transaction => {
    const values = transaction.reduce(
      (acc, item) =>
        acc[item.type]
          ? { ...acc, [item.type]: (acc[item.type] += item.amount) }
          : { ...acc, [item.type]: item.amount },
      { Deposit: 0, Withdrawal: 0 },
    );
    values.balance = values.Deposit - values.Withdrawal;
    return values;
  };

  render() {
    const { transaction, balance } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls addOperation={this.handleClick} balance={balance.balance} />
        <Balance changeBalance={balance} />
        <TransactionHistory transactions={transaction} />
      </div>
    );
  }
}

export default Dashboard;
