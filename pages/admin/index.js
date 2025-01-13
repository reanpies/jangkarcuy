import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await fetch('/api/menu', {
        headers: {
          Authorization: process.env.ADMIN_TOKEN, // Token untuk autentikasi
        },
      });
      const data = await res.json();
      setMenuItems(data);
      setLoading(false);
    };

    fetchMenuItems();
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      await fetch(`/api/menu/${id}`, { method: 'DELETE' });
      setMenuItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
