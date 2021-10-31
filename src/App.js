import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

import './main.scss'


function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
