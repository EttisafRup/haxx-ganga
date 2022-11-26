import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import env from "../env/env"
import useVerifyJWT from "../hooks/useVerifyJWT"

const Login = () => {
  if (localStorage.getItem("auth")){

    useVerifyJWT("/")
  }
    const [data, setData] = useState({
      email: "",
      password: "",
    })
    const [err, setErr] = useState({ err: "", success: "" })

    const submitForm = async (e: { preventDefault: () => void }) => {
      e.preventDefault()
      setErr({ success: "", err: "Processing your request..." })
      try {
        console.log(data)
        const result = await axios.post(env.server + "/login", data)
        if (result.data.err) {
          setErr({ ...err, err: result.data.msg })
        } else if (result.data.token) {
          setErr({ err: "", success: "Login was Successfull!" })
          localStorage.setItem("auth", result.data.token)
        }
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }
    return (
      <div>
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
                Login
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                {env.app}, {env.appSub}
              </p>
              <div className="font-semibold flex flex-row">
                <p className="text-sm mb-5 text-red-600">{err.err}</p>
                <p className="text-sm mb-5 text-green-600">{err.success}</p>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                onClick={submitForm}
                className="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Login
              </button>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Don't have any account?{" "}
                <a
                  className="text-red-700 font-bold hover:underline"
                  href="/signup"
                >
                  Signup Now
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  
}
export default Login
