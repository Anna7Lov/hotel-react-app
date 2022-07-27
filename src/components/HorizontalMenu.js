import './HorizontalMenu.scss';

export default function HorizontalMenu({ links }) {
  return (
    <ul className='HorizontalMenu'>
      {links.map((link, index) => (
        <li key={index} className='HorizontalMenu__item'>
          <a href={link.address} className='HorizontalMenu__link'> {link.name}  </a>
        </li>
      ))}
    </ul>
  );
}