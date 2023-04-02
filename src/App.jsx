import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer"
import ContactUs from "./pages/ContactUs"

function App() {
  return (
    <>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
