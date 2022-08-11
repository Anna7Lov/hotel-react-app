import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import RoomPage from './pages/RoomPage/RoomPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import {
  FEATURES,
  GALLERY,
  REVIEWS,
  ROOMS,
} from "./constants/routes";

function App() {
  return (   
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path={`${FEATURES}`} element={<FeaturesPage />} />
        <Route path={`${GALLERY}`} element={<GalleryPage />} />
        <Route path={`${REVIEWS}`} element={<ReviewsPage />} />
        <Route path={`${ROOMS}`} element={<RoomsPage />} />
        <Route path={`${ROOMS}/:id`} element={<RoomPage />} />        
        <Route path='*' element={<NotFoundPage />} />          
      </Routes>    
  );
}

export default App;