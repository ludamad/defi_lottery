import React from "react";

export interface DemoProps {
  username: string;
}
export function Demo(props: DemoProps) {
  return (
    <div>
      <div className="flex h-screen bg-gray-800 ">
        {/* Desktop sidebar */}
        <aside className="z-20 flex-shrink-0 hidden w-60 pl-2 overflow-y-auto bg-gray-800 md:block">
          <div>
            <div className="text-white">
              <div className="flex p-2  bg-gray-800">
                <div className="flex py-3 px-2 items-center">
                  <p className="text-2xl text-green-500 font-semibold">DEFI</p>
                  LOTTERY
                  <p />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img
                    className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
                    src="https://image.flaticon.com/icons/png/512/149/149071.png"
                    alt=""
                  />
                  <p className="font-bold text-base  text-gray-400 pt-2 text-center w-24">
                    {props.username}
                  </p>
                </div>
              </div>
              <div>
                <ul className="mt-6 leading-10">
                  <li className="relative px-2 py-1 ">
                    <a
                      className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
                      href=" #"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span className="ml-4">DASHBOARD</span>
                    </a>
                  </li>
                  <li className="relative px-2 py-1">
                    <div className="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer">
                      <span className="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                          />
                        </svg>
                        <span className="ml-4">ITEM</span>
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1  text-white w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ display: "none" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1  text-white w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ display: "none" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <div style={{ display: "none" }}>
                      <ul
                        className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium  rounded-md shadow-inner  bg-green-400"
                        aria-label="submenu"
                      >
                        <li className="px-2 py-1 text-white transition-colors duration-150">
                          <div className="px-1 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                              </svg>
                              <a
                                href="#"
                                className="w-full ml-2  text-sm font-semibold text-white hover:text-gray-800"
                              >
                                Item 1
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
