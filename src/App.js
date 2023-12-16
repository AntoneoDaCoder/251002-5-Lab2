import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home'
import { Series } from './Pages/Series'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SerialFullInfo from './Pages/SerialFullInfo';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="251002-5-Lab2/" element={<Home />} />
          <Route path="251002-5-Lab2/series" element={<Series />} />
          <Route path="251002-5-Lab2/series/:id" element={<SerialFullInfo/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
