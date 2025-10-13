import React from 'react';
import { login } from '../api';

export default function Login({ onLogin }) {
  const [u, setU] = React.useState('user');
  const [p, setP] = React.useState('password');
  const [err, setErr] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(u, p);
      onLogin(res.data.token || 'demo-token');
    } catch (e) {
      setErr('Login failed (server may not be running).');
    }
  };

  return (
    <div style={{padding:20}}>
      <h2>FarmPWA — Login</h2>
      <form onSubmit={submit}>
        <div>
          <label>Username</label><br/>
          <input value={u} onChange={e=>setU(e.target.value)} />
        </div>
        <div>
          <label>Password</label><br/>
          <input type="password" value={p} onChange={e=>setP(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        {err && <div style={{color:'red'}}>{err}</div>}
      </form>
    </div>
  );
}
