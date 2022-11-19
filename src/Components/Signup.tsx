import { useState } from "react"
import env from "../env/env"
import axios from "axios"
const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")

  const submitUserForm = async (e: any) => {
    e.preventDefault()
    try {
      const result = await axios.post("https://haxxganga.onrender.com/signup", {
        username,
        email,
        mobile,
        password,
      })

      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white m-4 text-center px-6 py-8 rounded shadow-md text-black w-full">
            <big>
              <strong>Signup</strong> with <strong>{env.app}</strong>
            </big>

            <form id="blog-form" method="post" action="/register">
              <div className="avatar-div">
                <label className="avatar-label text-black" htmlFor="inputTag">
                  &#128247;
                  <p className="m-4"></p>
                  <strong id="unselected">Choose a Picture</strong>
                  <input type="file" name="avatar" id="inputTag" required />
                  <p id="break"></p>
                  <span id="imageName"></span>
                </label>
              </div>
              <textarea
                className="block border h-12 w-full p-3 rounded mb-4"
                name="username"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></textarea>

              <p className="text-red-700 mb-1 error title-error"></p>

              <textarea
                className="block border w-full h-12 p-3 rounded mb-4"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></textarea>

              <p className="text-red-700 mb-1 error subtitle-error"></p>
              <textarea
                className="block border h-12  w-full p-3 rounded mb-4"
                name="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              ></textarea>

              <p className="text-red-700 mb-1 error description-error"></p>

              <textarea
                className="block border h-12  w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></textarea>

              <p className="text-red-700 mb-1 error description-error"></p>
              <label htmlFor="Gender">Your Gender : </label>
              <select name="gender" className="font-semibold text-red-700">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="text-red-700 mb-1 error description-error"></p>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-red-500 hover:bg-red-700 transition text-white hover:bg-green-dark focus:outline-none my-1"
                onClick={submitUserForm}
              >
                Signup
              </button>
              <p className="success success-message text-green-700"></p>
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
          <div className="text-black m-2 text-sm text-center">
            Drag to resize your Input Fields and put your informations
            comfortly!
          </div>
          <div className="flex">
            <a className="no-underline text-black font-semibold" href="/">
              &larr; Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
