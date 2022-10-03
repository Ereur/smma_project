import { Container } from 'react-bootstrap';
import './styles/App.css';
import Navig from './component/Navig';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Test from './component/Test';
import Navtabs from './component/Navtabs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navig />
      <Routes>
          <Route path='/' element={<Test name="Hello"/>} />
          <Route path='/YOUTUBE%20VIEWS' element={<Navtabs name="Hello"/>} />
          {/* <Route path='/YOUTUBE%20VIEWS/ok' element={<Test name="Hello"/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
