
import './App.css';
import Header from './elements/Header';
import DiveLog from './components/DiveLog';
import DiveDetails from './components/DiveDetails';
import AddDive from './components/AddDive';
import Auth from './components/Auth';
import { Route, Routes, Navigate} from 'react-router-dom';
import AuthContext from './store/authContext';
import { useContext } from 'react';

function App() {
  const {userId} = useContext(AuthContext);

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<DiveLog/>}/>
      <Route path="/auth" element={(!userId ? <Auth/> : <Navigate to='/'/>)}/>
      <Route path="/addDive" element={(userId ? <AddDive/> : <Navigate to='/auth'/>)}/>
      <Route path="/dives/:id" element={<DiveDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
