import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App (): JSX.Element {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
