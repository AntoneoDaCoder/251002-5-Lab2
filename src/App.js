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
          <Route exact path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<SerialFullInfo/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
