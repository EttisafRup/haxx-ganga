import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import env from "../env/env"

const checkJWT = async (path: string, redirectpath: string) => {
  const userAuthToken = localStorage.getItem("auth")
  const result = await axios.get(env.server + `${path}`, {
    headers: {
      Auth: userAuthToken,
    },
  })
  console.log(result)
  if (result.data.success === true) {
    location.replace(`${redirectpath}`)
  } else if (result.data.success === false) {
    null
  } else {
    localStorage.clear()
  }
}

export default checkJWT
