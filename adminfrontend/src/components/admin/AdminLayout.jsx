import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>🎬 FilmFund</h2>
        <nav>
          <NavLink to="/admin/add">Add Film</NavLink>
          <NavLink to="/admin/edit">Edit Film</NavLink>
          <NavLink to="/admin/list">Delete Film</NavLink>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
