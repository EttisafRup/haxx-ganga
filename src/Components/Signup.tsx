import { useEffect, useMemo, useState } from "react"
import env from "../env/env"
import axios from "axios"
import useVerifyJWT from "../hooks/useVerifyJWT"
import Error from "./Common/Hold/Error"

const Signup = () => {
  if (localStorage.getItem("auth")) {
    useVerifyJWT("/dev")
    return <Error message="You're already signed in!" />
  }
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  })
  const [err, setErr] = useState({
    username: { msg: "" },
    email: { msg: "" },
    mobile: { msg: "" },
    password: { msg: "" },
  })
  const [update, setUpdate] = useState({
    emailUpdate: "",
    processingUpdate: "",
  })

  const submitUserForm = async (e: any) => {
    e.preventDefault()
    setErr({
      username: { msg: "" },
      email: { msg: "" },
      mobile: { msg: "" },
      password: { msg: "" },
    })
    setUpdate({ ...update, processingUpdate: "Processing your request..." })
    try {
      const result = await axios.post(env.server + "/signup", data)
      setUpdate({ ...update, emailUpdate: result.data.success })
      if (result.data.success) {
        setTimeout(() => {
          location.replace("/signup/otp-validation")
        }, 3000)
      } else if (result.data.err) {
        setErr(result.data.err)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="mt-6 text-gray-600 body-font">
      <div className="home container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            src="https://i.ibb.co/44MGZK0/okooko.png"
            width="100%"
            className="absolute inset-0 bg-cover"
          />

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <p className="mt-1">
                <strong>{env.app}</strong> - 2022
              </p>
              <b>Today </b>:{" "}
              {new Date().toString().split(" ").slice(0, 4).join(" ")}
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <span className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL{" "}
              </span>
              <a className="text-red-700 leading-relaxed">{env.mail}</a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Signup
          </h2>

          <p className="leading-relaxed mb-5 text-gray-600">
            {env.app}, {env.appSub}
          </p>
          <p className="text-sm text-gray-600">{update.emailUpdate}</p>
          <p className="font-semibold text-base text-gray-600">
            {update.processingUpdate}
          </p>
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

            <p className="text-red-700 mb-1 error title-error">
              {err.username && err.username.msg}
            </p>

            <input
              className="block border w-full h-12 p-3 rounded mb-4"
              name="email"
              placeholder="Email Address"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <p className="text-red-700 mb-1 error subtitle-error">
              {err.email && err.email.msg}
            </p>
            <input
              className="block border h-12  w-full p-3 rounded mb-4"
              name="mobile"
              placeholder="Mobile Number"
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
            />

            <p className="text-red-700 mb-1 error description-error">
              {err.mobile && err.mobile.msg}
            </p>

            <input
              className="block border h-12  w-full p-3 rounded mb-4"
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />

            <p className="text-red-700 mb-1 error description-error">
              {err.password && err.password.msg}
            </p>
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
      </div>
    </section>
  )
}

export default Signup
