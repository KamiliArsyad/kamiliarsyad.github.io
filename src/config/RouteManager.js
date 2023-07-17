import App from "../App";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import InvalidLink from "../pages/InvalidLink";
import InterestsMain from "../pages/Interests/InterestsMain";
import AcademicsMain from "../pages/Academics/AcademicsMain";
import Dev from "../pages/Dev";
import { PostRoute } from "../features/posts/PostRoute";
import BlogMain from "../pages/Blog/BlogMain";

export default function RouteManager() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Landing />} />
        <Route path="interests" element={<InterestsMain />} />
        <Route path="academics" element={<AcademicsMain />} />
        {/* Blank page for development */}
        <Route element={<PostRoute />}>
          <Route path="blog" element={<BlogMain />} />
        </Route>
      </Route>
      <Route path="*" element={<InvalidLink />} />
    </Routes>
  );
}
