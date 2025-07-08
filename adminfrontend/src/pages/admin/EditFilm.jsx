import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './EditFilm.css';
import API from '../../services/api';

const EditFilm = () => {
  const [films, setFilms] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await API.get('/admin/films');
        setFilms(res.data);
      } catch (error) {
        toast.error('❌ Failed to fetch films');
        console.error(error);
      }
    };
    fetchFilms();
  }, []);

  const handleEdit = (film) => {
    setSelected({ ...film });
  };

  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await API.put(`/admin/films/${selected._id}`, {
        title: selected.title,
        image: selected.image,
        description: selected.description,
      });
      const updated = films.map((film) =>
        film._id === selected._id ? res.data : film
      );
      setFilms(updated);
      setSelected(null);
      toast.success('✏️ Film updated!');
    } catch (error) {
      toast.error('❌ Update failed');
      console.error(error);
    }
  };

  return (
    <div>
      {selected ? (
        <div className="film-form">
          <h3>Edit Film</h3>
          <input
            name="title"
            value={selected.title}
            onChange={handleChange}
            placeholder="Film Title"
          />
          <input
            name="image"
            value={selected.image}
            onChange={handleChange}
            placeholder="Film Image URL"
          />
          <textarea
            name="description"
            value={selected.description}
            onChange={handleChange}
            placeholder="Film Description"
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <ul>
          {films.map((film) => (
            <li key={film._id}>
              <strong>{film.title}</strong>
              <button onClick={() => handleEdit(film)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EditFilm;
