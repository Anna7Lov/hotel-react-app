import Logo from './Logo'
import HorizontalMenu from './HorizontalMenu'
import Button from '../shared/Button'
import Subtitle from '../shared/Subtitle'
import MainTitle from '../shared/MainTitle'
import Text from '../shared/Text'
import Weather from './Weather/Weather'

import './Header.scss';

export default function Header() {

    const horizontalLinks = [
        { id: 1, name: 'Home', address: '/' },
        { id: 2, name: 'Features', address: 'https://eva.ua/' },
        { id: 3, name: 'Gallery', address: 'https://evasss.ua/' },
        { id: 4, name: 'Reviews', address: 'https://eva.ua/' }
    ];

    return (
        <header className='header'>
            <div className='header__inner'>
                <div className='header__top'>
                    <Logo />
                    <HorizontalMenu links={horizontalLinks} />
                    <Button title='Book now' />
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