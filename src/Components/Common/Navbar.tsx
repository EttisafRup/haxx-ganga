import { useRef } from "react"

const Navbar = () => {
  const navRef: any = useRef()
  const popNavigator = () => {
    document.getElementsByClassName("home")[0].classList.toggle("animatedhide")
    navRef.current.classList.toggle("animatedhide")
  }

  return (
    <header className=" text-gray-600 body-font shadow-lg">
      <div className="hidden gradient w-full lg:block border-b fixed text-white">
        <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <a href="/">
              <span className="ml-3 text-xl tracking-wide text-white">
                ha<span className="text-red-700">x</span>x
                <span className="text-red-700">&#9765;</span>Ganga
              </span>
            </a>
          </a>
          <nav className="md:mr-auto bangla md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-1/2xl justify-center">
            <a href="/readme" className="mr-5 font-bold">
              README
            </a>
          </nav>
          <a href="/signup">
            <button className="inline-flex items-center transition-all bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-white mt-4 md:mt-0">
              Signup
            </button>
          </a>
          <a href="/login">
            <button className="inline-flex items-center bg-red-700 transition-all border-0 py-1 px-3 ml-2 focus:outline-none hover:bg-gray-900 rounded text-white mt-4 md:mt-0">
              LogIn
            </button>
          </a>
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
          <div
            style={{ zIndex: "20" }}
            className="p-5 bg-white border rounded shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl py-2 px-4 tracking-wider">
                <label className="text-xl font-semibold text-black tracking-wider">
                  ha<span className="text-red-600">x</span>x
                  <span className="text-red-600">&#9765;</span>Ganga
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
              <ul className="relative w-full space-y-4 bg-white">
                <li>
                  <a
                    href="/readme"
                    className="bangla font-bold tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    README
                  </a>
                </li>

                <div className="py-3">
                  <a href="/signup">
                    <button className="inline-flex items-center transition-all bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-white mt-4 md:mt-0">
                      Signup
                    </button>
                  </a>

                  <a href="/login">
                    <button className="inline-flex items-center bg-red-700 transition-all border-0 py-1 px-3 ml-2 focus:outline-none hover:bg-gray-900 rounded text-white mt-4 md:mt-0">
                      LogIn
                    </button>
                  </a>
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
