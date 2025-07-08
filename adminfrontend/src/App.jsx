import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import AddFilm from './pages/admin/AddFilm';
import EditFilm from './pages/admin/EditFilm';
import AdminFilmList from './pages/admin/AdminFilmList';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/add" />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add" element={<AddFilm />} />
          <Route path="edit" element={<EditFilm />} />
          <Route path="list" element={<AdminFilmList />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
