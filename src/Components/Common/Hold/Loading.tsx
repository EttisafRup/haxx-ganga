import env from "../../../env/env"
import CountUp from "react-countup"

const Loading = () => {
  return (
    <div>
      <section className="flex flex-col placeholder:items-center h-full mt-36 mb-36">
        <div className="max-w-md text-center">
          <big className="font-extrabold text-3xl md:text-9xl animate-ping text-black">
            Loading
            <span className="text-red-600">...</span>{" "}
            <CountUp end={10} duration={10} />
          </big>
        </div>
      </section>
    </div>
  )
}

export default Loading
