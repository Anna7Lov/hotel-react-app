import HeaderNotMainPage from '../../components/shared/HeaderNotMainPage/HeaderNotMainPage';
import Gallery from '../../components/gallery/Gallery';

import './GalleryPage.scss';

export default function GalleryPage() {
    return (
        <div className='gallery-page'>
            <HeaderNotMainPage />
            <div className='gallery-page__content'>
                <Gallery />
            </div>
        </div>
    )
}