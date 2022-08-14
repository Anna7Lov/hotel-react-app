import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import RoomPage from './pages/RoomPage/RoomPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Footer from './components/shared/Footer/Footer';
import { Services } from '../src/services/services';
import {
  FEATURES,
  GALLERY,
  REVIEWS,
  ROOMS,
} from "./constants/routes";

function App() {
  const [selected, setSelected] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getOptions() {
      const response = await Services.getOptions();
      setOptions(response.data);
    }
    getOptions();
  }, []);

  const handleChange = event => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage options={options} selected={selected} handleChange={handleChange} />} />
        <Route path={`${FEATURES}`} element={<FeaturesPage />} />
        <Route path={`${GALLERY}`} element={<GalleryPage />} />
        <Route path={`${REVIEWS}`} element={<ReviewsPage />} />
        <Route path={`${ROOMS}`} element={<RoomsPage selected={selected} />} />
        <Route path={`${ROOMS}/:id`} element={<RoomPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;