import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Menu.css';

const setActive = ({isActive}) => (isActive ? "active" : "")


const Menu = () => (
  <nav>
    <div className="nav-wrapper light-blue accent-4">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink className={setActive} to="/about">About</NavLink></li>
        <li><NavLink className={setActive} to="/notes">Notes</NavLink></li>
        <li><NavLink className={setActive} to="/todo">Todo</NavLink></li>
      </ul>
    </div>
</nav>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
