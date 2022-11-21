import React, { useEffect } from "react"
import env from "../../env/env"

const Readme = () => {

  return (
    <div className="mx-4 my-7 md:mx-10">
      <span className="text-red-600 text-2xl">#</span>
      <big className="md:text-3xl text-xl font-semibold underline">
        {" "}
        README{" "}
      </big>

      <p className="text-base mt-5">
        Before using {env.app}, please be sure that you are agree with our{" "}
        <a className="text-indigo-600 font-bold" href="">
          Terms and Policy
        </a>
        <p className="m-2"></p>
        Please note that, there are a lot of boundaries for using our tools. We
        can only allow you to use our tools for educational Purpose only!{" "}
        <strong>
          If you misused these tools, we are not going to be responsible for it.
        </strong>
      </p>

      <blockquote className="border-l-4 border-red-500 italic my-8 pl-8 md:pl-12">
        <p className="-px-6">Documentations Coming Soon! </p>
      </blockquote>
      {/* <pre className="bg-gray-900 w-full rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-red-500">const</span> pacha = require("pacha")
          <p></p>
          <p className="text-gray-500 mb-5">
            // Protect your Pacha Server, just Pass the port into the function
          </p>
          <span className="text-red-500">pacha</span>.protectAss(SERVER_PORT)
          <p className="text-gray-500">
            // Server PORT can be importted from env variables
          </p>
          <p></p>
        </code>
      </pre> */}

      <p className="text-xl mt-5 font-medium ">Have a good day, Hacker!! 😉</p>
    </div>
  )
}

export default Readme
