import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './contactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input className={styles.input} type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label className={styles.label}>
          Number
          <input className={styles.input} type="tel" name="number" value={number} onChange={this.handleChange} />
        </label>
        <button className={styles.submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
