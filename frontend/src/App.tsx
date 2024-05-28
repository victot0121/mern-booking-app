import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layout/Layout"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home</p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>search page...</p>
        </Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

