import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // This is a mock authentication, replace it with your real authentication logic
    if(username === '' && password === ''){
      navigate('/cockpit');
    } else {
      alert('Invalid credentials');
    }
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F8EDC8'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '29%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  };

  const inputStyle = {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '10px',
    color: '#999999',
    backgroundColor: '#EBEBEB',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
  };

  const buttonStyle = {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '10px',
    color: '#fff',
    backgroundColor: '#BFB7A2',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
          <input 
            style={inputStyle}
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Email"
          />
          <input 
            style={inputStyle}
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Passwort"
          />
          <input style={buttonStyle} type="submit" value="Anmelden" />
      </form>
    </div>
  )
}

export default Login;
