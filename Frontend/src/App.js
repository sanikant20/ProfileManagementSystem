import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/editScreen' element={<EditScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
