import axios, { AxiosResponse } from "axios"
import { Result } from "postcss"
import React, { useEffect } from "react"
import env from "../env/env"
import Error from "./Common/Hold/Error"
import useVerifyJWT from "../hooks/useVerifyJWT"

const playMenu = [
  "https://www.youtube.com/embed/sdYPIBwOjb0?autoplay=1",
  "https://www.youtube.com/embed/bYfvGu2wEis?autoplay=1",
  "https://www.youtube.com/embed/JtAlUs3hG_Q?autoplay=1",
  "https://www.youtube.com/embed/z67rlTu-FbI?autoplay=1",
  "https://www.youtube.com/embed/sdYPIBwOjb0?autoplay=1",
  "https://www.youtube.com/embed/bYfvGu2wEis?autoplay=1",
  "https://www.youtube.com/embed/JtAlUs3hG_Q?autoplay=1",
  "https://www.youtube.com/embed/z67rlTu-FbI?autoplay=1",
  "https://www.youtube.com/embed/sdYPIBwOjb0?autoplay=1",
  "https://www.youtube.com/embed/bYfvGu2wEis?autoplay=1",
  "https://www.youtube.com/embed/JtAlUs3hG_Q?autoplay=1",
  "https://www.youtube.com/embed/z67rlTu-FbI?autoplay=1",
  "https://www.youtube.com/embed/sdYPIBwOjb0?autoplay=1",
  "https://www.youtube.com/embed/bYfvGu2wEis?autoplay=1",
  "https://www.youtube.com/embed/JtAlUs3hG_Q?autoplay=1",
  "https://www.youtube.com/embed/z67rlTu-FbI?autoplay=1",
]
const Dev = () => {
  if (!localStorage.getItem("auth")) {
    useVerifyJWT("/")
  }

  return (
    <div className="mt-7 flex flex-col align-center justify-center text-center">
      <big className="text-base md:text-5xl">🖤</big>

      <p className="text-base md:text-3xl mt-5 mb-12">
        The Dev is too lazy to work, here's an awesome song for you from youtube
        😚
      </p>
      <div className="flex align-center justify-center">
        <iframe
          className="flex align-center justify-center h-72 md:h-96 w-full m-2 md:w-1/2"
          src={playMenu[Math.round(Math.random() * 10)]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Dev
