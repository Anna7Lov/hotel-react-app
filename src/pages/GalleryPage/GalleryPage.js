import HorizontalMenu from '../../components/shared/HorizontalMenu/HorizontalMenu';
import Button from '../../components/shared/Button/Button';
import Logo from '../../components/shared/Logo/Logo';
import Footer from '../../components/shared/Footer/Footer';
import { horizontalLinks } from '../../components/main/Header/Header';
import Gallery from '../../components/gallery/Gallery';

import './GalleryPage.scss';

export default function GalleryPage() {
    return (
        <div className='gallery-page'>
            <div className='gallery-page__main-content'>
                <div className='gallery-page__top'>
                    <Logo />
                    <HorizontalMenu links={horizontalLinks} />
                    <Button title='Contact us' />
                </div>
                <div className='gallery-page__content'>
                    <Gallery />
                </div>
            </div>
            <Footer />
        </div>
    )
}