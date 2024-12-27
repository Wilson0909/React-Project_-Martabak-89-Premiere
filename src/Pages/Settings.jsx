import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import SideBar from '../components/SideBar';

function Settings() {
  return (
    <div className="admin-container">
        <NavbarAdmin />
        <div className="admin-content">
            <SideBar />
          <main className="admin-main">
            <h2>memek</h2>
          </main>
        </div>
      </div>
  );
}

export default Settings;