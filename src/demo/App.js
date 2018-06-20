import React from 'react';
import IsOnline from '../lib';

const handleChange = (isOnline) => {
  console.log(isOnline);
};

/* eslint-disable */
const App = () => (
  <div>
    <IsOnline
      OnlineComponent={<h1>Online 📱</h1>}
      OfflineComponent={<h1>Offline 📴</h1>}
      onChange={handleChange}
    />
  </div>
);

export default App;
