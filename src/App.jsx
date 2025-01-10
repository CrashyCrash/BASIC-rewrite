// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HierarchyLayout from './components/HierarchyLayout';
import CenterDeep from './pages/CenterDeep';
import CommandCanvas from './pages/CommandCanvas';
import CRC from './pages/CRC';
import MagiCode from './pages/MagiCode';
import CognitiveCompanion from './pages/CognitiveCompanion';

function App() {
  console.log('App component rendering...');
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<HierarchyLayout />} />
        <Route path="/centerdeep" element={<CenterDeep />} />
        <Route path="/commandcanvas" element={<CommandCanvas />} />
        <Route path="/crc" element={<CRC />} />
        <Route path="/magicode" element={<MagiCode />} />
        <Route path="/cognitivecompanion" element={<CognitiveCompanion />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
