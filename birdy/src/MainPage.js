import React, { useState } from 'react';
import NavigationPanel from './NavigationPanel';

function MainPage() {
  const [currentPage, setCurrentPage] = useState('signin_page');
  const [userIsConnected, setUserIsConnected] = useState(false);

  // fonction de connexion de l'utilisateur
  const getConnected = () => {
    setUserIsConnected(true);
    setCurrentPage('message_page');
  }

  const setLogout = () => {
    setUserIsConnected(False);
    setCurrentPage('signin_page');
  }

  return (
    <div>
        <NavigationPanel login={getConnected} logout={setLogout} userIsConnected={userIsConnected}/>
    </div>
  );
}

export default MainPage;
