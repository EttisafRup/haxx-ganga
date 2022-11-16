import { useRef } from "react"

const Navbar = () => {
  const navRef: any = useRef()
  const popNavigator = () => {
    navRef.current.classList.toggle("animatedhide")
  }

  return (
    <header className="z-20 text-gray-600 body-font shadow-lg">
      <div className="hidden gradient w-full lg:block border-b fixed text-white">
        <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="img/logo.png"
              style={{
                width: "50px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              alt=""
            />
            <a href="/home">
              <span className="ml-3 text-xl tracking-wide text-white">
                &rarr;<span style={{ color: "#ff0022" }}>b</span>USSINESS
                <span style={{ color: "ff0022" }}>&#9765;</span>ASSETS
              </span>
            </a>
          </a>
          <nav className="md:mr-auto bangla md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-1/2xl justify-center">
            <a href="#courses" className="mr-5 font-bold">
              README
            </a>
          </nav>
          <a href="/profile">
            <button className="inline-flex items-center transition-all bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-white mt-4 md:mt-0">
              Profile
            </button>
          </a>
          <button className="inline-flex items-center bg-red-700 transition-all border-0 py-1 px-3 ml-2 focus:outline-none hover:bg-gray-900 rounded text-white mt-4 md:mt-0">
            LogOut
          </button>
        </div>
      </div>
      {/* Button Hamburger */}
      <div className="lg:hidden">
        <div className="absolute right-5 top-5">
          <button
            onClick={popNavigator}
            aria-label="Open Menu"
            title="Open Menu"
            className="gradient p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          >
            <svg className="navbtn w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigator */}
        <div
          ref={navRef}
          className="animatedhide popout text-center absolute top-0 left-0 w-full"
        >
          <div className="p-5 bg-white border rounded shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl py-2 px-4 tracking-wider">
                <label className="text-xl font-semibold text-black tracking-wider">
                  &rarr;<span style={{ color: "#ff0022" }}>b</span>USSINESS
                  <span style={{ color: "#ff0022" }}>&#9765;</span>ASSETS
                </label>
              </div>
              <div>
                <button
                  onClick={popNavigator}
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="text-white font-bold gradient p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none text-sm focus:shadow-outline"
                >
                  &#9587;
                </button>
              </div>
            </div>
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#courses"
                    aria-label="Our product"
                    title="Our product"
                    className="bangla font-bold tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    README
                  </a>
                </li>
                <div className="py-3">
                  <a href="/profile">
                    <button className="inline-flex items-center transition-all bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0">
                      Profile
                    </button>
                  </a>
                  <button className="inline-flex items-center bg-red-600 transition-all border-0 py-1 px-3 ml-2 focus:outline-none hover:bg-red-500 rounded text-white mt-4 md:mt-0">
                    LogOut
                  </button>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
