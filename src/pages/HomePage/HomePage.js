import Header from '../../components/main/Header/Header';
import BookingForm from '../../components/main/BookingForm/BookingForm';
import Video from '../../components/main/Video/Video';
import Subtitle from '../../components/shared/Subtitle/Subtitle';
import Title from '../../components/shared/Title/Title';
import Button from '../..//components/shared/Button/Button';
import AdvantagesContent from '../../components/main/AdvantagesContent/AdvantagesContent';
import Reviews from '../../components/main/Reviews/Reviews';
import Footer from '../../components/shared/Footer/Footer';
import ModalWindow from '../../components/main/ModalWindow/ModalWindow';
import Rooms from '../../components/main/Rooms/Rooms';
import SubscriptionForm from '../../components/main/SubscriptionForm/SubscriptionForm';

import './HomePage.scss';

export default function HomePage({options, selected, handleChange}) {
    return (
        <div>
            <Header />
            <BookingForm additionalClass='main-form' options={options} selected={selected} handleChange={handleChange}/>
            <div className='video-content'>
                <Video />
                <div className='video-content__text'>
                    <Subtitle title='Dream holidays' />
                    <Title title='Enjoy unforgettable experiences in dream hotel' />
                    <Button title='View more' />
                </div>
            </div>
            <AdvantagesContent />
            <div className="rooms-content">
                <div className='rooms-info'>
                <Title additionalClass='rooms-info__title' title='Choose your perfect room!' />
                <ModalWindow />
                </div>
                <Rooms />                
            </div>
            <div className="reviews-content">
                <Title additionalClass='reviews-content__title' title='What our clients say' />
                <Reviews />
            </div>
            <div className="subscription-content">
            <Subtitle title='STAY IN TOUCH' />
            <Title additionalClass='subscription-content__title' title='Join our email. First to know about specials, events and more!' />
            <SubscriptionForm />
            </div>
            <Footer />
        </div>
    )
}