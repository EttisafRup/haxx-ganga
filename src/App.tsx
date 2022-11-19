import EmailSender from "./Components/MailSender"
import Footer from "./Components/Common/Footer"
import Navbar from "./Components/Common/Navbar"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import Readme from "./Components/Common/Readme"
import Login from "./Components/Login"
import Error from "./Components/Common/Error"
import Signup from "./Components/Signup"
import OTP from "./Components/OTP"

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/otp-validation" element={<OTP />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/email-sender" element={<EmailSender />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
