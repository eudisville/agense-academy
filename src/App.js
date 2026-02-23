import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Actus from './pages/Actus';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/actus" element={<Actus />} />
      </Routes>
    </Router>
  )
}

export default App;
