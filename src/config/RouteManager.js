import App from '../App';
import { Routes, Route } from 'react-router-dom';

export default function RouteManager() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
    </Routes>
  );
}