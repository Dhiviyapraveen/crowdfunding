import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './AdminPages.css';
import API from '../../services/api';

const AdminFilmList = () => {
  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    try {
      const res = await API.get('/admin/films');
      setFilms(res.data);
    } catch (error) {
      toast.error('❌ Failed to fetch films');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/admin/films/${id}`);
      setFilms(films.filter((film) => film._id !== id));
      toast.error('🗑️ Film deleted!');
    } catch (error) {
      toast.error('❌ Deletion failed');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <ul>
      {films.map((film) => (
        <li key={film._id}>
          <strong>{film.title}</strong>
          <button onClick={() => handleDelete(film._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AdminFilmList;
