import './VerticalMenu.scss';

export default function VerticalMenu({ links }) {
  return (
    <div className='vertical-menu'>

      <div className='vertical-menu__content'>
        <h6 className='vertical-menu__title'>Home</h6>
        <ul className='vertical-menu__links'>
          {links[0].map((link) => (
            <li key={link.id} className='vertical-menu__item'>
              <a href={link.address} className='vertical-menu__link'> {link.name} </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='vertical-menu__content'>
        <h6 className='vertical-menu__title'>Pages</h6>
        <ul className='vertical-menu__links'>
          {links[1].map((link) => (
            <li key={link.id} className='vertical-menu__item'>
              <a href={link.address} className='vertical-menu__link'> {link.name} </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='vertical-menu__content'>
        <h6 className='vertical-menu__title'>Business</h6>
        <ul className='vertical-menu__links'>
          {links[2].map((link) => (
            <li key={link.id} className='vertical-menu__item'>
              <a href={link.address} className='vertical-menu__link'> {link.name} </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}