import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SingleAlbum.scss';

const SingleAlbum = (props) => (
  <NavLink to={props.path} onClick={props.setSongs}>
    <div className={styles.Album}>
      <img src={props.image} alt="album"/>
      <p>{props.name}</p>
    </div>
  </NavLink>
);

export default SingleAlbum;
