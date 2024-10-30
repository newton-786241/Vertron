import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './header';
import Home from './Home';
import CarD from './CD';
import Aboutus from './Aboutus';
import ServiceCD from './ServicesCD';
import Services from './Services';
import Parts from './Parts'
import BlogsBanner from './blogsbanner';
import BlogsPage from './blogspage';
import Contactpage from './contactpage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Aboutus' element={<Aboutus/>}></Route>
          <Route path='/Parts' element={<Parts/>}></Route>
          <Route path='/blogspage' element={<BlogsPage/>}></Route>
          <Route path='/contactpage' element={<Contactpage/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
