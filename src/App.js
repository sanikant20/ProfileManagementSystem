import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PageNotFound from './screens/PageNotFound';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/ProfileScreen/EditScreen';
import AllProfiles from './screens/ProfileScreen/ProfileListScreen';
import AddProfile from './screens/ProfileScreen/AddProfileScreen';
import ManageProfileScreen from './screens/ProfileScreen/ManageProfileScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<HomeScreen />} />
        <Route path="/all-Profiles" element={<AllProfiles />} />
        <Route path='/add-profiles' element={<AddProfile />} />
        <Route path='/manage-profiles' element={< ManageProfileScreen />} />
        <Route path="/EditScreen/:profileId" element={<EditScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
