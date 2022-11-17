import React, { useEffect } from "react"

const Readme = () => {
  useEffect(() => {
    document.title = "Documentations - Pacha"
  })
  return (
    <div className="mx-4 my-7 md:mx-10">
      <span className="text-pink-600 text-2xl">#</span>
      <big className="md:text-3xl text-xl font-semibold underline">
        {" "}
        Documentations{" "}
      </big>

      <p className="text-base mt-5">
        With Pacha, we can protect our Server's Pacha from Multiple Attacks and
        Threads given by unethical communities! Also, we can take data from our
        users with more security and perfection by just calling a function?!{" "}
      </p>

      <blockquote className="border-l-4 border-pink-500 italic my-8 pl-8 md:pl-12">
        <p className="-px-6">Turning on the Server Pacha Protection </p>
      </blockquote>
      <pre className="bg-gray-900 w-full rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-pink-500">const</span> pacha = require("pacha")
          <p></p>
          <p className="text-gray-500 mb-5">
            // Protect your Pacha Server, just Pass the port into the function
          </p>
          <span className="text-pink-500">pacha</span>.protectAss(SERVER_PORT)
          <p className="text-gray-500">
            // Server PORT can be importted from env variables
          </p>
          <p></p>
        </code>
      </pre>
      <blockquote className="border-l-4 border-pink-500 italic my-8 pl-8 md:pl-12">
        <p className="-px-6">
          Verify Legal Connections into your Pacha Server{" "}
        </p>
      </blockquote>
      <pre className="bg-gray-900 w-full rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-pink-500">pacha</span>
          .verifyPachaConnection(<span className="text-pink-500">true</span>)
          <p className="text-gray-500">
            // parse true/false by parameter (Default is false)
          </p>
          <p></p>
        </code>
      </pre>
      <blockquote className="border-l-4 border-pink-500 italic my-8 pl-8 md:pl-12">
        <p className="-px-6">Verify Real Users into your Database </p>
      </blockquote>
      <pre className="bg-gray-900 w-full rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-pink-500">pacha</span>
          .verifyAuthUser(<span className="text-pink-500">req.body</span>)
          <p></p>
        </code>
      </pre>
      <p className="text-base font-medium m-5">
        It will receive data from the body and check everything sent in the
        server. If everything is okay, it will call next
        <span className="text-pink-500 ">()</span>. Otherwise, it will throw an
        error by default. You can throw an custom error like this
      </p>

      <pre className="bg-gray-900 w-full rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-pink-500">pacha</span>
          .verifyAuthUser(
          <span className="text-pink-500">req.body</span>)<p></p>
          <span className="text-pink-500"> ? </span> null <p></p>
          <span className="text-pink-500"> : </span>{" "}
          pacha.verifyAuthUser.error((field)
          <span className="text-pink-500"> &rarr; </span>{" "}
          pacha.throwError("There was an error!")
          <span className="text-pink-500"></span>`)
          <p className="text-gray-500"></p>
          <p></p>
        </code>
      </pre>
      <blockquote className="border-l-4 border-pink-500 italic my-8 pl-8 md:pl-12">
        <p className="-px-6">
          Last but not the least, To Vibrate your Pacha -{" "}
        </p>
      </blockquote>

      <pre className="bg-gray-900 w-full rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-pink-500">pacha</span>
          .vibrateAss(&#123; vibrate:{" "}
          <span className="text-pink-500">true</span> &#125;)<p></p>
          <p className="text-gray-500">
            // Enjoy your vibrating ass with Pacha 🖤
          </p>
          <p></p>
        </code>
      </pre>
      <p className="text-xl mt-5 font-medium ">Have a good day, Dev! 😉</p>
    </div>
  )
}

export default Readme
