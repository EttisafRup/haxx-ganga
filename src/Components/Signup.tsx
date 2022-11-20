import { useEffect, useState } from "react"
import env from "../env/env"
import axios from "axios"
const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  })
  console.log(data)
  const [emailUpdate, setEmailUpdate] = useState("")

  const submitUserForm = async (e: any) => {
    e.preventDefault()
    try {
      console.log("SUmbitton")
      const result = await axios.post(env.server + "/signup", data)
      setEmailUpdate(result.data.success)
      console.log(result)
      result.data.success
        ? setTimeout(() => {
            location.replace("/signup/otp-validation")
          }, 3000)
        : null
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="bgphoto">
      <div className="black-cover"></div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white m-4 text-center px-6 py-8 rounded shadow-md text-black w-full">
            <big>
              <strong>Signup</strong> with <strong>{env.app}</strong>
              <p className="font-semibold m-2 text-black text-sm">
                {emailUpdate &&
                  emailUpdate +
                    " " +
                    "Check your mail that we've sent a OTP Code into your email"}
              </p>
            </big>

            <form id="blog-form" method="post" action="/register">
              {/* <div className="avatar-div">
                <label className="avatar-label text-black" htmlFor="inputTag">
                  &#128247;
                  <p className="m-4"></p>
                  <strong id="unselected">Choose a Picture</strong>
                  <input type="file" name="avatar" id="inputTag" required />
                  <p id="break"></p>
                  <span id="imageName"></span>
                </label>
              </div> */}
              <input
                className="block border h-12 w-full p-3 rounded mb-4"
                name="username"
                placeholder="Github Username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />

              <p className="text-red-700 mb-1 error title-error">{}</p>

              <input
                className="block border w-full h-12 p-3 rounded mb-4"
                name="email"
                placeholder="Email Address"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />

              <p className="text-red-700 mb-1 error subtitle-error"></p>
              <input
                className="block border h-12  w-full p-3 rounded mb-4"
                name="mobile"
                placeholder="Mobile Number"
                value={data.mobile}
                onChange={(e) => setData({ ...data, mobile: e.target.value })}
              />

              <p className="text-red-700 mb-1 error description-error"></p>

              <input
                className="block border h-12  w-full p-3 rounded mb-4"
                name="password"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />

              <p className="text-red-700 mb-1 error description-error"></p>
              <label className="font-semibold" htmlFor="Gender">
                Gender :{" "}
              </label>
              <select
                name="gender"
                className="font-semibold bg-transparent text-black border-0"
              >
                <option className="text-gray-700" value="male">
                  Male
                </option>
                <option className="text-gray-700" value="female">
                  Female
                </option>
              </select>
              <p className="text-red-700 mb-1 error description-error"></p>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-red-500 hover:bg-red-700 transition text-white hover:bg-green-dark focus:outline-none my-1"
                onClick={submitUserForm}
              >
                Signup
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              &aelig; {env.app}, {env.appSub}
              <p className="text-sm text-gray-500 mt-3 text-center">
                Already having an account?{" "}
                <a
                  className="text-red-700 font-bold hover:underline"
                  href="/login"
                >
                  Login Now
                </a>
              </p>
            </div>
          </div>

          <div className="flex">
            <a
              className="no-underline border-2 p-2 rounded-2xl hover:bg-white hover:text-black transition-all hover:rounded-none text-white font-semibold"
              href="/"
            >
              &larr; Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
