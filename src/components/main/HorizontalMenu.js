import './HorizontalMenu.scss';

export default function HorizontalMenu({ links }) {
  return (
    <ul className='horizontal-menu'>
      {links.map((link) => (
        <li key={link.id} className='horizontal-menu__item'>
          <a href={link.address} className='horizontal-menu__link'> {link.name} </a>
        </li>
      ))}
    </ul>
  );
}