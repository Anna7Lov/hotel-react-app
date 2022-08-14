import React from "react";
import { Link } from 'react-router-dom';

import './HorizontalMenu.scss';

export default function HorizontalMenu({ links }) {
  return (
    <nav className='horizontal-menu'>
    <ul className='horizontal-menu__links'>
      {links.map((link) => (
        <li key={link.id} className='horizontal-menu__item'>
          <Link to={link.address} className='horizontal-menu__link'> {link.name} </Link>
        </li>
      ))}
    </ul>
    </nav>
  );
}