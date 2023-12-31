import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/main' element={<Main />} />
      <Route path='*' element={<Main />} />
    </Routes>
  );
};

export default App;
