import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Test1 from './Pages/Test1';
import Test2 from './Pages/Test2';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test1' element={<Test1 />} />
          <Route path='/test2' element={<Test2 />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
