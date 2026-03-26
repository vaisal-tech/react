import { BrowserRouter as Router,Routes,Route }  from "react-router-dom"
import Footer from "./components/Footer"
import Nav from './components/Nav'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ProjectBlog from "./pages/ProjectBlog"
import "./App.css"

function App(){

  return (
    <Router>
    <div className="container">
      <Nav/>
      <div className="main">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home name="AS VAISAL" role="Senior Software Engineer"/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/project" element={<ProjectBlog/>}/>
        </Routes>
        <Footer/>
      </div>
      
      
    </div>
    </Router>
  )


}

export default App