import App from '../App';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import InvalidLink from '../pages/InvalidLink';

export default function RouteManager() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Landing />} />
        <Route path="*" element={<InvalidLink />} />
      </Route>

    </Routes>
  );
}