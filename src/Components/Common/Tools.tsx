import axios from "axios"
import React, { useMemo, useState } from "react"
import env from "../../env/env"

const Tools = () => {
  const [tools, setTools] = useState<any[]>([])

  useMemo(() => {
    axios
      .get(env.server + "/tools")
      .then((data) => {
        setTools(data.data.tools)
      })
      .catch((err) => console.log(err))
  }, [tools])

  return (
    <div>
      <big className="text-2xl font-semibold text-black mx-3">
        <span className="text-red-600">A</span>vailable Tools
      </big>
      <p className="m-5"></p>

      <div className="flex flex-wrap items-center justify-center flex-row-reverse mx-3">
        {tools.map((elem) => {
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
  )
}

export default Tools
