import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import Service from "./Service"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

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
