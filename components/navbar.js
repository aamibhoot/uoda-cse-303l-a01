import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

export default function Navbar({ isLogin, user }) {
  const router = useRouter();
  const navigation =
    isLogin === true ? [] : ["Home", "Contact", "About", "Join"];
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/login");
  }
  return (
    <div className="fixed min-w-full top-0 z-50 bg-opacity-70 h-[72px] glassbg">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img src="/logo.png" alt="UCS" className="h-24 z-30" />
                    </span>
                    <span>
                      <img
                        src="/logo-text.png"
                        alt="UCS"
                        className="w-28 pb-5"
                      />
                    </span>
                  </a>
                </Link>
                <Disclosure.Button
                  aria-label="Menu"
                  className="px-2 mb-6 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-white focus:text-indigo-500 focus:bg-white hover:bg-indigo-700 focus:outline-none transition duration-500 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap justify-end items-end w-4/5 ml-16 -my-6 pt-5 lg:hidden glassbg">
                  <>
                    <p className="w-full text-right px-4 py-2 -ml-4 text-gray-100 rounded-md transition duration-500 ease-in-out">
                      @{user}
                    </p>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={`/` + (item === "Home" ? "" : item.toLowerCase())}
                      >
                        <a className="w-full text-right px-4 py-2 -ml-4 text-gray-100 rounded-md transition duration-500 ease-in-out hover:bg-indigo-600 hover:bg-opacity-70 hover:text-gray-200 focus:text-indigo-500 focus:bg-indigo-100">
                          {item}
                        </a>
                      </Link>
                    ))}
                    {isLogin === true ? (
                      <button
                        onClick={() => {
                          deleteCookie("ucs_token");
                        }}
                        className="w-full mx-4 mb-4 px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5 transition duration-500 ease-in-out hover:bg-indigo-700"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link href="/login">
                        <a className="w-full mx-4 mb-4 px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                          Login
                        </a>
                      </Link>
                    )}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 pb-5 nav__item" key={index}>
                <Link href={`/` + (menu === "Home" ? "" : menu.toLowerCase())}>
                  <a className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md text-gray-200 transition duration-500 ease-in-out hover:bg-indigo-600 hover:bg-opacity-30 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden pb-5 mr-3 space-x-4 lg:flex nav__item">
          {isLogin === true ? (
            <span className="flex w-full justify-center items-center">
              <p className="">@{user}</p>
              <button
                onClick={() => {
                  deleteCookie("ucs_token");
                }}
                className="w-full px-6 py-2 mt-1 text-center text-white bg-indigo-600 rounded-md lg:ml-5 transition duration-500 ease-in-out hover:bg-indigo-700"
              >
                Logout
              </button>
            </span>
          ) : (
            <Link href="/login">
              <a className="w-full px-6 py-2 text-center text-white bg-indigo-600 rounded-md lg:ml-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                Login
              </a>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
