import Header from './components/main/Header';
import BookingForm from './components/main/BookingForm';
import Video from './components/main/Video';
import Subtitle from './components/shared/Subtitle';
import Title from './components/shared/Title';
import Button from './components/shared/Button';
import AdvantagesContent from './components/main/AdvantagesContent';
import Reviews from './components/main/Reviews';
import Footer from './components/main/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;