import { Routes, Route, BrowserRouter } from "react-router-dom"
import Error from "./Components/Common/Error"
import { lazy, Suspense } from "react"
import Navbar from "./Components/Common/Navbar"
import Footer from "./Components/Common/Footer"
import Home from "./Components/Home"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import OTP from "./Components/OTP"

import Readme from "./Components/Common/Readme"

// Tools Route
const EmailSender = lazy(() => import("./Components/MailSender"))

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Suspense fallback={<h1>Hello</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/otp-validation" element={<OTP />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
            <Route path="/readme" element={<Readme />} />
            <Route path="/email-sender" element={<EmailSender />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
