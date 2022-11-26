import axios from "axios"
import { lazy, Suspense, useEffect } from "react"
import env from "../env/env"
import Readme from "./Common/Readme"
import Users from "./Common/Users"
import Loading from "./Common/Hold/Loading"
const Tools = lazy(() => import("./Common/Tools"))

const Home = () => {
  useEffect(() => {
    document.title = `Home - ${env.app}`
  })

  return (
    <>
      <section className="mt-12 md:mt-0 text-gray-600 body-font">
        <div>
          <div className="fancybg py-8 h-72 flex flex-col justify-center shadow-lg rounded">
            <h1 className="text-center text-3xl md:text-5xl text-white">
              {env.app}
            </h1>
            <p className="text-white text-center m-4 text-sm md:text-lg font-semibold">
              {env.appSub}
            </p>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <p className="m-5"></p>
          <Readme />
          <p className="m-5"></p>
          <hr className="mt-4 mb-4" />
          <Tools />
          <hr className="mt-4 mb-4" />
          <p className="m-5"></p>
          <Users />
          <hr className="mt-4 mb-4" />
        </Suspense>
      </section>
    </>
  )
}

export default Home
