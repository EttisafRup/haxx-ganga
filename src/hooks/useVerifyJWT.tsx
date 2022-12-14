import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import env from "../env/env"

const checkJWT = async (redirectpath: string) => {
  const userAuthToken = localStorage.getItem("auth")
  const result = await axios.get(env.server + "/verifyjwt", {
    headers: {
      Auth: userAuthToken,
    },
  })
  console.log(result)
  if (result.data.success === true) {
    setTimeout(() => {
      location.replace(`${redirectpath}`)
    }, 3000)
  } else if (result.data.success === false) {
    null
  } else {
    localStorage.clear()
    location.replace(`${redirectpath}`)
  }
}

export default checkJWT
