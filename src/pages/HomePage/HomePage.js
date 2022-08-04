import Header from '../../components/main/Header/Header';
import BookingForm from '../../components/main/BookingForm/BookingForm';
import Video from '../../components/main/Video/Video';
import Subtitle from '../../components/shared/Subtitle/Subtitle';
import Title from '../../components/shared/Title/Title';
import Button from '../..//components/shared/Button/Button';
import AdvantagesContent from '../../components/main/AdvantagesContent/AdvantagesContent';
import Reviews from '../../components/main/Reviews/Reviews';
import Footer from '../../components/main/Footer/Footer';

import './HomePage.scss';

export default function HomePage() {
    return (
        <div>
            <Header />
            <BookingForm />
            <div className='video-content'>
                <Video />
                <div className='video-content__text'>
                    <Subtitle title='Dream holidays' />
                    <Title title='Enjoy unforgettable experiences in dream hotel' />
                    <Button title='View more' />
                </div>
            </div>
            <AdvantagesContent />
            <div className="reviews-content">
                <Title title='What our clients say' />
                <Reviews />
            </div>
            <Footer />
        </div>
    )
}