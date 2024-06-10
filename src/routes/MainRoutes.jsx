import React from "react";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import AnimePage from "../pages/AnimePage";
import AnimeDetails from "../components/product/AnimeDetails";
import AdminPageSeries from "../pages/AdminPageSeries";
import EditPageSeries from "../pages/EditPageSeries";
import SeriesCard from "../components/product/SeriesCard";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Movies from "../pages/Movies";
import Cartoon from "../pages/Cartoon";
export const ADMIN_ROUTES = [
  { id: 1, link: "/admin", element: <AdminPage /> },
  { id: 2, link: "/edit/:id", element: <EditPage /> },
  { id: 3, link: "/adminSeries", element: <AdminPageSeries /> },
  { id: 4, link: "/editSeries/:id", element: <EditPageSeries /> },
  { id: 5, link: "/seriesCard", element: <SeriesCard /> },
];

const PUBLIC_POUTES = [
  { id: 1, link: "/home", element: <HomePage /> },
  { id: 2, link: "/anime", element: <AnimePage /> },
  { id: 3, link: "/movies", element: <Movies /> },
  { id: 4, link: "/cartoon", element: <Cartoon /> },
  { id: 5, link: "/details", element: <AnimeDetails /> },
  { id: 6, link: "/register", element: <RegisterPage /> },
  { id: 7, link: "/login", element: <LoginPage /> },
];

const MainRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
      {PUBLIC_POUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
