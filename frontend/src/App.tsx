import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layout/Layout"
import Register from "./pages/Register"
import Search from "./pages/Search"
import Signin from "./pages/Signin"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home</p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          {/* <p>search page...</p> */} 
          <Search/>
        </Layout>} />
        <Route path="/register" element={<Layout><Register/></Layout>}/>
        <Route path="/sign-in" element={<Layout><Signin/></Layout>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

