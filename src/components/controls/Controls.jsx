import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

class Controls extends Component {
  state = {
    amount: '',
    type: '',
    date: '',
  };

  static propTypes = {
    addOperation: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
  };

  notifyLittleMoney = () => {
    toast("Sorry, you don't have enough money on your account", {
      autoClose: 2000,
      position: 'top-center',
    });
  };

  notifyNegativeMoney = () => {
    toast("You can't put negative amount, please try again", {
      autoClose: 2000,
      position: 'top-center',
    });
  };

  onChange = e => {
    const amount = () =>
      e.target.value === '' ? '' : parseFloat(e.target.value);
    this.setState({ amount: amount() });
  };

  onClick = e => {
    const { balance } = this.props;
    const { amount } = this.state;
    if (amount < 0) {
      this.notifyNegativeMoney();
      this.setState({ amount: '', type: '', date: '' });
      return;
    }
    const withdrawal = () => (e.target.name === 'Withdrawal' ? amount : 0);
    if (balance < withdrawal()) {
      this.notifyLittleMoney();
      this.setState({ amount: '', type: '', date: '' });
      return;
    }
    const date = new Date();
    this.setState(
      {
        type: e.target.name,
        date: date.toLocaleString(),
      },
      () => {
        this.props.addOperation(this.state);
        this.setState({ amount: '', type: '', date: '' });
      },
    );
  };

  render() {
    const { amount } = this.state;
    return (
      <section className={styles.controls}>
        <input
          className={styles.input}
          value={amount}
          type="number"
          onChange={this.onChange}
          step="0.01"
        />
        <button
          className={styles.btn}
          name="Deposit"
          onClick={this.onClick}
          type="button"
        >
          Deposit
        </button>
        <button
          className={styles.btn}
          name="Withdrawal"
          onClick={this.onClick}
          type="button"
        >
          Withdraw
        </button>
        <ToastContainer />
      </section>
    );
  }
}

export default Controls;
