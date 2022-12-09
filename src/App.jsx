// Import react-router-dom
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

// Elements
import ItemDetailContainer from './Views/ItemDetailContainer'
import ItemListContainer from './Views/ItemListContainer'
import Cart from './Views/Cart'

//css
import './app.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </>
  )
}

export default App
