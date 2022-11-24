import React, { useEffect } from "react"
import env from "../../env/env"

const Readme = () => {
  return (
    <div className="mx-4 my-7 md:mx-10">
      <span className="text-red-700 text-2xl">#</span>
      <big className="md:text-3xl text-xl font-semibold">{env.app}</big>
      <p className="text-base ml-4">{env.appSub}</p>
      <div>
        <div className="container px-5 py-2 mx-auto flex flex-wrap md:flex-row">
          <div className="flex items-center align-center flex-col w-full">
            <img
              className="object-cover object-center rounded-lg md:w-full md:h-72"
              src="./ok.png"
              alt="step"
            />
          </div>
        </div>
        <blockquote className="border-l-4 border-red-500 italic my-8 pl-8 md:pl-12">
          <big className="font-bold text-red-700">WARNING!</big>
          <p className="text-base mt-5">
            Before using {env.app}, please make sure that you've checked out our{" "}
            <a className="text-red-700 font-bold" href="">
              Terms and Policy
            </a>{" "}
            and agree with it.
            <p></p>
            Please note that, there are some limitations of using our tools. We
            can only allow you to use our tools for educational Purpose only!{" "}
            <p className="mt-3"></p>
            <strong>
              If you misused these tools, we are not gonna be responsible for
              it.
            </strong>
          </p>
        </blockquote>
      </div>
      <big className="text-base font-semibold">
        For initializing, follow these steps :
      </big>
      <p className="mb-5"></p>
      <div className="block md:flex md:flex-row items-center justify-center">
        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            1
          </div>
          <div className="pl-4">
            <big className="font-medium title-font text-base text-gray-900 mb-1 tracking-wider">
              Choose your Tool
            </big>
            <p className="leading-relaxed">
              Choose the tool what you want to use, You can find it from the{" "}
              <a className="text-indigo-700 font-semibold" href="/tools">
                Available Tools
              </a>{" "}
              page.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            2
          </div>
          <div className="pl-4">
            <big className="font-medium title-font text-base text-gray-900 mb-1 tracking-wider">
              Clone the Git
            </big>
            <p className="leading-relaxed">
              Clone the Git repository. You can clone or fork or download the
              repository locally into your machine.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            3
          </div>
          <div className="pl-4">
            <big className="font-medium title-font text-base text-gray-900 mb-1 tracking-wider">
              Install the tool dependencies
            </big>
            <p className="leading-relaxed">
              Open up your terminal and enter command to install the
              dependencies (if required). Docs should provided the commands
              below
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            4
          </div>
          <div className="pl-4">
            <big className="font-medium title-font text-base text-gray-900 mb-1 tracking-wider">
              Follow the Documentations
            </big>
            <p className="leading-relaxed">
              The git must provided a git repository there, just follow the
              documentations and enjoy your tool!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 flex items-center justify-center">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
        </div>
        <div className="flex flex-col pl-4">
          <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            FINISH
          </h2>
          <p className="leading-relaxed">
            You're all done. Enjoy your tools. And don't forget to rate the
            developer on <strong>{env.app}!!</strong>
          </p>
        </div>
      </div>
      <p className="text-xl mt-5 font-medium ">
        Have a great time, Hacker!! 😉
      </p>
    </div>
  )
}

export default Readme
