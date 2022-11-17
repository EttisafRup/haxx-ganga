import env from "../env/env"

const Login = () => {
  return (
    <div>
      <section className="mt-6 text-gray-600 body-font">
        <div className="home container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img
              src="data:image/jpeg;base64,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"
              width="100%"
              className="absolute inset-0 bg-cover"
            />

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <p className="mt-1">
                  <strong>{env.app}</strong> - 2022
                </p>
                <b>Today </b>:{" "}
                {new Date().toString().split(" ").slice(0, 4).join(" ")}
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <span className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL{" "}
                </span>
                <a className="text-red-700 leading-relaxed">{env.mail}</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Login
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {env.app}, {env.appSub}
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button className="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Login
            </button>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Don't have any account?{" "}
              <a
                className="text-red-700 font-bold hover:underline"
                href="/signup"
              >
                Signup Now
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
