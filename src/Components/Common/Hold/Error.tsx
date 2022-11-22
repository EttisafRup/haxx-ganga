import { useEffect } from "react"
import { redirect } from "react-router-dom"

import env from "../../../env/env"
const Error = () => {
  useEffect(() => {
    document.title = `Error 404 - ${env.app}`
  })
  return (
    <div>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>4
              <span className="text-red-600">0</span>4
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              Seems like you're lost in space 😳
            </p>
            <a href="/">
              <button className="px-8 py-3 font-semibold rounded border-2 dark:bg-violet-400 dark:text-gray-900">
                Back to Home
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Error
