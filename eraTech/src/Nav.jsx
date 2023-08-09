import { useState } from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: " الصفحة الرئيسية", path: "/" },
    { title: "من نحن", path: "/about" },
    { title: "للتواصل", path: "/contact" },
    // { title: "شركاء", path: "javascript:void(0)" },
  ];

  return (
    <nav className="bg-blue-100 w-full border-b md:border-0 fixed z-50  ">
      <div className="items-center px-10 mx-auto md:flex ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* <a href="javascript:void(0)">
                        <img
                            src="/logo.svg" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a> */}
          <Link to={"/"}>
            <p className="namenav">مؤسسة رغد الرواشدة للريادة والابتكار كف ضغط الدم</p>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 md:block md:pb-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};
export default Nav;
