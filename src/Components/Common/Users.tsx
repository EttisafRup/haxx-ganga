import axios from "axios"
import React, { useState } from "react"
import env from "../../env/env"
import CountUp from "react-countup"

const Users = () => {
  const [users, setUsers] = useState<any[]>([])

  axios
    .get(env.server + "/users")
    .then((data) => {
      setUsers(data.data.users)
    })
    .catch((err) => console.log(err))

  return (
    <div>
      <section className="text-gray-600 body-font mx-4">
        <big className="text-2xl font-semibold text-black">
          {env.app} <span className="text-red-600">U</span>sers
        </big>
        <p className="mx-2 text-md">
          - There are already{" "}
          <strong className="text-red-600 text-xl">
            <CountUp end={Object.keys(users).length} />
          </strong>{" "}
          developers enjoying <strong>{env.app}</strong> ❤
        </p>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 w-full p-4 rounded">
            {users.map((elem) => {
              return (
                <div className="tooltip text-sm">
                  <a
                    className="cursor-pointer"
                    href={"https://github.com/" + `${elem.username}`}
                    target="_blank"
                  >
                    <img
                      alt={elem.username}
                      className="w-10 h-10 md:w-20 md:h-20 m-1 md:m-2 rounded-full"
                      src={elem.avatar}
                    />
                  </a>
                  <span className="tooltiptext text-sm">{elem.username}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Users
