import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.scss';

const Header = (props) => (
  <div className={styles.Header}>
    <h1 className={styles.Test}>{props.headerTitle}</h1>
  </div>
)

const mapStateToProps = state => {
  return {
    headerTitle: state.changeHeaderReducer.headerTitle
  }
}

export default connect(mapStateToProps)(Header);
