import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path="/EditScreen/:profileId" element={<EditScreen />} />
        <Route path="/Profiles" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
