import { useEffect } from "react"
import env from "../env/env"

const Home = () => {
  useEffect(() => {
    document.title = `Home - ${env.app}`
  })
  return (
    <>
      <section className="home text-gray-600 body-font">
        <div>
          <div className="fancybg mt-2 py-8 h-72 flex flex-col justify-center shadow-lg rounded">
            <h1 className="text-center text-3xl md:text-5xl text-white">
              {env.app}
            </h1>
            <p className="text-white text-center m-4 text-sm md:text-lg font-semibold">
              {env.appSub}
            </p>
          </div>
          <p className="m-5"></p>
          <big className="text-2xl font-semibold text-black">
            <span className="text-red-600">A</span>vailable Tools :
          </big>
          <p className="m-5"></p>
          <div className="flex flex-wrap -m-2">
            {env.tools.map((elem) => {
              return (
                <div className="cursor-pointer p-2 lg:w-1/3 md:w-1/2 w-full">
                  <a href={elem.path}>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={elem.image}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          {elem.name}
                        </h2>
                        <p className="text-gray-500">{elem.description}</p>
                        <a href={elem.author.media}>
                          <strong className="text-gray-500">
                            🎆 {elem.author.name}
                          </strong>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
