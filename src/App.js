
import './App.css';
import Header from './elements/Header';
import DiveLog from './components/DiveLog';
import DiveDetails from './components/DiveDetails';
import AddDive from './components/AddDive';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route index element={<Auth/>}/>
      <Route path="/home" element={<DiveLog/>}/>
      <Route path="addDive" element={<AddDive/>}/>
      <Route path="dives/:id" element={<DiveDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
