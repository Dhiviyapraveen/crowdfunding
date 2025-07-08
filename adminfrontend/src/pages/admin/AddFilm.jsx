import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './AddFilm.css';
import API from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

const AddFilm = () => {
  const [film, setFilm] = useState({ title: '', description: '', image: '' });

  const handleChange = (e) => {
    setFilm({ ...film, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/admin/films', film);
      toast.success('🎉 Film added successfully!');
      setFilm({ title: '', description: '', image: '' });
    } catch (error) {
      toast.error('❌ Failed to add film');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="film-form">
      <h2>Add a New Film</h2>
      <input
        name="title"
        placeholder="Title"
        value={film.title}
        onChange={handleChange}
        required
      />
      <input
        name="image"
        placeholder="Image URL"
        value={film.image}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={film.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Film</button>
    </form>
  );
};

export default AddFilm;
