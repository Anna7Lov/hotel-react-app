import './App.scss';
import Header from './components/main/Header'
import Video from './components/main/Video'
import Subtitle from './components/shared/Subtitle'
import Title from './components/shared/Title'
import Button from './components/shared/Button'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='video-content'>
      <Video />
      <div className='video-content__text'>
      <Subtitle title='Dream holidays' />
      <Title title='Enjoy unforgettable experiences in dream hotel' />
      <Button title='View more' />
      </div>
      </div>
    </div>
  );
}

export default App;