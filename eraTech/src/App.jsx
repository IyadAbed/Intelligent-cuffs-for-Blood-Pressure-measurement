import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Nav from "./Nav"
import Footer from "./Footer"
import Service from "./Service"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/service" element={<Service />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
