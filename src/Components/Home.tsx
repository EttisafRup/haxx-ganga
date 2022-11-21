import axios from "axios"
import { useEffect } from "react"
import env from "../env/env"
import Tools from "./Common/Tools"

const Home = () => {
  useEffect(() => {
    document.title = `Home - ${env.app}`
  })

  return (
    <>
      <section className="mt-12 md:mt-0 home text-gray-600 body-font">
        <div className="fancybg py-8 h-72 flex flex-col justify-center shadow-lg rounded">
          <h1 className="text-center text-3xl md:text-5xl text-white">
            {env.app}
          </h1>
          <p className="text-white text-center m-4 text-sm md:text-lg font-semibold">
            {env.appSub}
          </p>
        </div>
        <p className="m-5"></p>
        <Tools />
      </section>
    </>
  )
}

export default Home
