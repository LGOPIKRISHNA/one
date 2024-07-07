// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/register', { email, password });
//       console.log(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Register.css";
// axios.defaults.baseURL = '';
function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/register', { name, email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control rounded-0" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control rounded-0" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control rounded-0" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register;