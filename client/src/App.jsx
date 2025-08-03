import { Routes, Route, useNavigate } from 'react-router-dom';
import Apod from "./pages/Apod";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Apod />} />
    </Routes>
  );
}

export default App;