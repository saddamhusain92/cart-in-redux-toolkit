import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import ProgressBar from "react-progressbar-on-scroll";
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <ProgressBar
      color="#00d4ff"
      gradient={true}
      gradientColor="#eee"
      height={4}
    />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

      </Routes>
      
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
