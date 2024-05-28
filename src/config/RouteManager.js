import App from "../App";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import InvalidLink from "../pages/InvalidLink";
import InterestsMain from "../pages/Interests/InterestsMain";
import AcademicsMain from "../pages/Academics/AcademicsMain";
import Dev from "../pages/Dev";
import { PostRoute } from "../features/posts/PostRoute";
import BlogDashboard from "../pages/Blog/BlogDashboard";
import BlogPost from "../pages/Blog/BlogPost";
import ProjectsMain from "../pages/Projects/ProjectsMain";
import MDEditor from "../pages/Projects/MDEditor";
import InstantCell from "../pages/Projects/InstantCell";
import { ICTRoute } from "../features/instantCellTable/ICTRoute";
import UserLogin from "../pages/Admin/UserLogin";
import { AdminRoute } from "../features/admin/AdminRoute";
import BlogMaker from "../pages/Blog/BlogMaker";

export default function RouteManager() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<AdminRoute />}>
          <Route path="" element={<Landing />} />
          <Route path="admin/login" element={<UserLogin />} />
          <Route path="interests" element={<InterestsMain />} />
          <Route path="projects" element={<ProjectsMain />} />
          <Route
            path="projects/online-markdown-editor"
            element={<MDEditor />}
          />
          <Route element={<ICTRoute />}>
            <Route path="projects/instant-cell" element={<InstantCell />} />
          </Route>
          <Route path="academics" element={<AcademicsMain />} />
          <Route element={<PostRoute />}>
            <Route path="blog" element={<BlogDashboard />} />
            <Route path="blog/:postid" element={<BlogPost />} />
            <Route path="blog-new" element={<BlogMaker />} />
          </Route>
          <Route path="dev" element={<Dev />} />
        </Route>
      </Route>
      <Route path="*" element={<InvalidLink />} />
    </Routes>
  );
}
