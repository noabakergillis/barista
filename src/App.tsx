import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import StudentSignup from './routes/studentSignup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/studentSignup' element={<StudentSignup/>} />
      </Routes>
    </div>
  );
}

export default App;


