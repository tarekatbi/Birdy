import React, { useState } from 'react';
import NavigationPanel from './NavigationPanel';
import Signin from "./Signin"


function MainPage() {
  const [currentPage, setCurrentPage] = useState('signin_page');
  const [userIsConnected, setUserIsConnected] = useState(false);

  // fonction de connexion de l'utilisateur
  const getConnected = () => {
    setUserIsConnected(true);
    setCurrentPage('message_page');
  }

  const setLogout = () => {
    setUserIsConnected(false);
    setCurrentPage('signin_page');
  }

  return (
    
    <div>
      {currentPage==="signin_page"? <Signin /> :
        <NavigationPanel login={getConnected} logout={setLogout} userIsConnected={userIsConnected}/>}
    </div>
  );
}

export default MainPage;
