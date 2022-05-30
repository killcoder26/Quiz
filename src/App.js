import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maths from './Maths'
import Computer from './Computer'
import Science from './Science'
import English from "./English";
import Home from "./Home"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/maths' element={<Maths />} />
          <Route path='/english' element={<English />} />
          <Route path='/science' element={<Science />} />
          <Route path='/computer' element={<Computer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
