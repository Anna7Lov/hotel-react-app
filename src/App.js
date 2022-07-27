import './App.scss';
import Header from './components/Header'
import Video from './components/Video'
import Subtitle from './components/Subtitle'
import Title from './components/Title'
import Button from './components/Button'

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