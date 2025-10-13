import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App(){
  const [token, setToken] = React.useState(null);

  if(!token) return <Login onLogin={setToken} />;
  return <Dashboard token={token} onLogout={()=>setToken(null)} />;
}
