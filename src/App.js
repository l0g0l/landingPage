import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
// import PrivateRoute from './Config/routes/PrivateRoute'
// import ScrollToTopOnMount from './components/ScrollToTopOnMount';
// import LongContent from './components/LongContent';



import './main.scss'


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTopOnMount/> */}
        <Home />
        {/* <PrivateRoute path='/home' children={<LongContent/>} ></PrivateRoute> */}
      </BrowserRouter>
    </>
  );
}

export default App;
