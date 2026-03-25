import { BrowserRouter as Router,Routes,Route }  from "react-router-dom"
import Footer from "./components/Footer"
import Nav from './components/Nav'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import "./App.css"

function App(){

  return (
    <Router>
    <div className="container">
      <Nav/>
      <div className="main">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
        <Footer/>
      </div>
      
      
    </div>
    </Router>
  )


}

export default App