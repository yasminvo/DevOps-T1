import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "/users";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const fetchUsers = () => {
    axios.get(API_URL)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { 
      name: form.name,
      email: form.email,
      password: form.password,
    };
 
    axios.post(API_URL, payload)
      .then(() => {
        fetchUsers();
        resetForm();
      })
      .catch(err => console.error(err));
  };

  const resetForm = () => {
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Users</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Create</button>
      </form>

      <ul>
        {users.map(u => (
          <li key={u._id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
