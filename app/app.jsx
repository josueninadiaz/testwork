import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InboxSharingConfiguration from './InboxSharingConfiguration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InboxSharingConfiguration />} />
        {/* Agregar más rutas si lo necesitas */}
      </Routes>
    </Router>
  );
}

export default App;
