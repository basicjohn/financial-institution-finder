// Dependencies
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

// Styles
import './App.css';

// Components
import InstitutionsList from './components/InstitutionsList';
import InstitutionDetail from './components/InstitutionDetail';


export const App:React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<InstitutionsList />} />
              <Route path="/institutions" element={<InstitutionsList />} />
              <Route path="/institutions/:id"element={<InstitutionDetail />} />
            </Routes>
          </main>
      </Router>
    </div>
  );
}
export default App;