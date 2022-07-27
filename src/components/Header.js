import Logo from './Logo'
import HorizontalMenu from './HorizontalMenu'
import Button from './Button'
import Subtitle from './Subtitle'
import MainTitle from './MainTitle'
import Text from './Text'
import Weather from './Weather'

import './Header.scss';

export default function Header() {

    let horizontalLinks = [
        { name: 'Home', address: '/' },
        { name: 'Features', address: 'https://eva.ua/' },
        { name: 'Gallery', address: 'https://evasss.ua/' },
        { name: 'Reviews', address: 'https://eva.ua/' }
    ];

    return (
        <header className='Header'>
            <div className='Header__inner'>
                <div className='Header__top'>
                    <Logo />
                    <HorizontalMenu links={horizontalLinks} />
                    <Button title='Book now' />
                </div>
                <Weather city='Barcelona' />
                <Subtitle title='Serenity' />
                <MainTitle title='Stay with us feel like' word='home' />
                <Text additionalClass='Header__text' text='Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t bear to be parted.' />   
                <Button title='Read more' />             
            </div>
        </header>
    )
}