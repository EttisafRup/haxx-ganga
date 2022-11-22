import { Routes, Route, BrowserRouter } from "react-router-dom"
import Error from "./Components/Common/Hold/Error"
import { lazy, Suspense } from "react"
import Navbar from "./Components/Common/Navbar"
import Footer from "./Components/Common/Footer"
import Home from "./Components/Home"
const Signup = lazy(() => import("./Components/Signup"))
const Login = lazy(() => import("./Components/Login"))
const OTP = lazy(() => import("./Components/OTP"))

import Readme from "./Components/Common/Readme"
import Loading from "./Components/Common/Hold/Loading"
import Tools from "./Components/Common/Tools"

// Tools Route

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/otp-validation" element={<OTP />} />
            <Route path="/login" element={<Login />} />
            <Route path="/readme" element={<Readme />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
