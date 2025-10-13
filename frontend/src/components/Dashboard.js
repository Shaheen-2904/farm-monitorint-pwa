import React from 'react';
import MapView from './MapView';
import { fetchFarms } from '../api';

export default function Dashboard({ token, onLogout }) {
  const [farms, setFarms] = React.useState([]);

  React.useEffect(()=>{
    let mounted = true;
    fetchFarms(token).then(r=> mounted && setFarms(r.data)).catch(()=> {
      // fallback demo data when backend not running
      if(mounted) setFarms([{id:1,name:'Demo Farm',lat:28.6139,lng:77.2090}]);
    });
    return ()=> mounted = false;
  },[token]);

  return (
    <div style={{display:'flex',height:'100vh',flexDirection:'column'}}>
      <header style={{padding:10,background:'#2E7D32',color:'white',display:'flex',justifyContent:'space-between'}}>
        <div>Farm Operations Dashboard</div>
        <button onClick={onLogout}>Logout</button>
      </header>
      <main style={{flex:1,display:'flex'}}>
        <div style={{flex:'1 1 50%'}}>
          <h3 style={{padding:10}}>Farms</h3>
          <ul>
            {farms.map(f=> <li key={f.id}>{f.name} — ({f.lat},{f.lng})</li>)}
          </ul>
        </div>
        <div style={{flex:'1 1 50%'}}>
          <MapView farms={farms} />
        </div>
      </main>
    </div>
  );
}
