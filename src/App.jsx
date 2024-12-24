import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './Home/Home'
import Create from './CreatePage/Create';
import Update from './Update/Update'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/edit/:id" element={<Update/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
