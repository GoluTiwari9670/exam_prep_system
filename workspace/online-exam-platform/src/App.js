import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import QuestionBank from './components/QuestionBank';
import ExamScheduler from './components/ExamScheduler';
import UserDashboard from './components/UserDashboard';
import ExamPage from './components/ExamPage';
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/questions" element={<QuestionBank />} />
        <Route path="/admin/schedule" element={<ExamScheduler />} />
        <Route path="/exam/:examCode" element={<ExamPage />} />
        <Route path="/results/:userId" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
