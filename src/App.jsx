import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import {Home,About, Subscribe} from "./views"
import {Navbar, Footer} from "./components"
import './App.css'

function App() {

  return (
    <Router>

    <div className="parent-container">
    <Navbar/>
<div className="app">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/subscription" element={<Subscribe/>}/>
    </Routes>
    <Footer/>
</div>
    </div>

    </Router>
  )
}

export default App
