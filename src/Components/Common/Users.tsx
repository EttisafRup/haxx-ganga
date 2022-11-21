import axios from "axios"
import React, { useState } from "react"
import env from "../../env/env"

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
        <big className="text-2xl text-black">
          {env.app} <span className="text-red-600">U</span>sers
        </big>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 w-full p-4 rounded">
            {users.map((elem) => {
              return (
                <>
                  <img
                    alt="ecommerce"
                    className="w-20 h-20 m-2 rounded-full"
                    src={elem.avatar}
                  />
                </>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Users
