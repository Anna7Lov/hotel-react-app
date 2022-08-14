import React from "react";

import './VerticalMenu.scss';

export default function VerticalMenu({ links }) {
  return (
    <div className='vertical-menu'>
      {links.map((item) => (
        <div key={item.id} className='vertical-menu__content'>
          <h6 className='vertical-menu__title'>{item.title}</h6>
          <ul className='vertical-menu__links'>
            {item.list.map((link) => (
              <li key={link.id} className='vertical-menu__item'>
                <a href={link.address} className='vertical-menu__link'> {link.name} </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}