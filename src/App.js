import './App.css';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route, Routes } from 'react-router-dom';
import IndexSeven from './pages/index-seven';

function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexSeven/>}/>
    </Routes>
  );
}

export default App;
