import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Posts from './pages/Posts';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

function AppContent() {
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    // FORCE remove dark class - for testing only
    document.documentElement.classList.remove('dark');
    console.log('Forcing light mode, isDark is:', isDark);
  }, [isDark]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}