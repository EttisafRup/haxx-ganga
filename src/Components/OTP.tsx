import axios from "axios"
import { useState } from "react"
import env from "../env/env"

const OTP = () => {
  const [otp, setOtp] = useState("")
  const [userUpdate, setUserUpdate] = useState("")

  const submitOTP = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const result = await axios.post(env.server + "/signup/otp-check", { otp })
    console.log(result)
    setUserUpdate(result.data.message)
    result.data.message
      ? setTimeout(() => {
          location.replace("/login")
        }, 3000)
      : null
  }

  return (
    <div className="bgphoto">
      <div className="black-cover"></div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white m-4 text-center px-6 py-8 rounded shadow-md text-black w-full">
            <big>
              <strong>OTP</strong> Verification - <strong>{env.app}</strong>
              <p className="text-sm m-2">
                We've sent an OTP Code on your email, please check it out
              </p>
              <p className="font-semibold text-green-600 text-sm">
                {userUpdate}
              </p>
            </big>

            <form id="blog-form" method="post" action="/register">
              <input
                className="block border h-12 w-full p-3 rounded mb-4"
                name="otp"
                placeholder="Enter OTP Code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button
                className="w-full text-center py-3 rounded bg-red-500 hover:bg-red-700 transition text-white hover:bg-green-dark focus:outline-none my-1"
                onClick={submitOTP}
              >
                Submit OTP
              </button>
              <p className="success success-message text-green-700"></p>
            </form>
            <div className="text-black m-2 text-sm text-center">
              Drag to resize your Input Fields and put your informations
              comfortly!
            </div>
            <div className="flex">
              <a
                className="no-underline text-center text-black font-semibold"
                href="/signup"
              >
                &larr; Back to Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTP
