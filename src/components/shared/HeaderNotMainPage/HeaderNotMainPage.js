import Logo from '../../shared/Logo/Logo';
import HorizontalMenu from '../../shared/HorizontalMenu/HorizontalMenu';
import Button from '../../shared/Button/Button';
import { horizontalLinks } from '../../../components/main/Header/Header';

import './HeaderNotMainPage.scss';

export default function HeaderNotMainPage() {
    return (
        <div className='header-not-main-page'>
            <Logo />
            <HorizontalMenu links={horizontalLinks} />
            <Button title='Contact us' />
        </div>
    )
}