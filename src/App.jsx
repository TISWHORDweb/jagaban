import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Programs from './pages/Programs'
import Partnerships from './pages/Partnerships'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/get-involved" element={<Navigate to="/contact" replace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
