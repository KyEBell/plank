import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import { MainContent } from './src/MainContent';

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
