import {Routes,Route} from 'react-router-dom';
import { Index } from './pages';
import { Create } from './pages/create';
import { View } from './pages/View';

function App() {

  return (
    <div>
       <Routes>
          <Route path='/' element={<Index/>} ></Route>
          <Route path='/create' element={<Create/>} ></Route>
          <Route path='/view/:bookId' element={<View/>} ></Route>
       </Routes>
    </div>
  )
}

export default App
