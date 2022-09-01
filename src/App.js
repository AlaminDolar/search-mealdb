import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Meal></Meal>}></Route>
      </Routes>
    </div>
  );
}

export default App;
