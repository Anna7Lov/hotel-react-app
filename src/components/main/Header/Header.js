import Logo from '../../shared/Logo/Logo';
import HorizontalMenu from '../../shared/HorizontalMenu/HorizontalMenu';
import Button from '../../shared/Button/Button';
import Subtitle from '../../shared/Subtitle/Subtitle';
import MainTitle from '../../shared/MainTitle/MainTitle';
import Text from '../../shared/Text/Text';
import Weather from '../Weather/Weather';

import './Header.scss';

export const horizontalLinks = [
    { id: 1, name: 'Home', address: '/' },
    { id: 2, name: 'Features', address: '/features' },
    { id: 3, name: 'Gallery', address: '/gallery' },
    { id: 4, name: 'Reviews', address: '/reviews' }
];

export default function Header() {
    return (
        <header className='header'>
            <div className='header__inner'>
                <div className='header__top'>
                    <Logo />
                    <HorizontalMenu links={horizontalLinks} />
                    <Button title='Contact us' />
                </div>
                <Weather city='Barcelona' />
                <Subtitle title='Serenity' />
                <MainTitle title='Stay with us feel like' word='home' />
                <Text additionalClass='header__text' text='Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t bear to be parted.' />   
                <Button title='Read more' />             
            </div>
        </header>
    )
}