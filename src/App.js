import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (   
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
        <Route path='*' element={<NotFoundPage />} />          
      </Routes>    
  );
}

export default App;