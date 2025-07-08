import "./AdminHome.css";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="admin-home">
      <aside className="sidebar">
        <h2>FilmFund Admin</h2>
        <nav>
          <Link to="/admin/films">Manage Films</Link>
          <Link to="/admin/films/add">Add Film</Link>
          <Link to="/">Logout</Link>
        </nav>
      </aside>

      <main className="admin-main">
        <div className="overlay">
          <h1>Welcome, Admin</h1>
          <p>Use the tools below to manage short film campaigns effectively.</p>
          <div className="admin-actions">
            <Link to="/admin/films" className="action-btn">View / Edit Films</Link>
            <Link to="/admin/films/add" className="action-btn">Add New Film</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
