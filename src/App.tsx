import EmailSender from "./Components/MailSender"
import Footer from "./Components/Common/Footer"
import Navbar from "./Components/Common/Navbar"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import Readme from "./Components/Readme"

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <div className="w-full container px-5 py-24 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/readme" element={<Readme />} />
            <Route path="/email-sender" element={<EmailSender />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
