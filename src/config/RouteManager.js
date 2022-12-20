import App from '../App';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import InvalidLink from '../pages/InvalidLink';
import InterestsMain from '../pages/Interests/InterestsMain';
import AcademicsMain from '../pages/Academics/AcademicsMain';

export default function RouteManager() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Landing />} />
        <Route path="interests" element={<InterestsMain />} />
        <Route path="academics" element={<AcademicsMain />} />
        <Route path="*" element={<InvalidLink />} />
      </Route>

    </Routes>
  );
}