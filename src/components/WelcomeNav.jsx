import { useState } from "react";
import Header from "./Header";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function WelcomeNav() {
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      <nav>
        <div className="flex items-center lg:justify-around justify-between px-4">
          <Header />
          <div className="ml-24">
            <ul className="hidden lg:flex gap-14 font-semibold text-xl">
              <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 rounded-lg px-2 hover:text-darkGrayishBlue cursor-pointer">
                <Link to="/operate">Operate</Link>
              </li>
              <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 rounded-lg px-2 hover:text-darkGrayishBlue cursor-pointer">
                <Link to="/about">Dashboard</Link>
              </li>
              <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 rounded-lg px-2 hover:text-darkGrayishBlue cursor-pointer">
                <Link to="/login">Logout</Link>
              </li>
              <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 rounded-lg px-2 hover:text-darkGrayishBlue cursor-pointer">
                Role :
              </li>
            </ul>
          </div>
          <button onClick={() => setToggle((prev) => !prev)}>
            <FaBars className="lg:hidden text-2xl" />
          </button>

          {toggle && (
            <div className="fixed bg-white inset-0">
              <div className="flex items-center lg:justify-around justify-between px-4">
                <Header />
                <button onClick={() => setToggle((prev) => !prev)}>
                  <IoMdClose className="lg:hidden text-3xl" />
                </button>
              </div>
              <ul className="flex flex-col gap-8 text-xl font-semibold items-center">
                <li className="text-center w-full hover:bg-grayishBlue duration-200 py-2">
                  <Link to="/operate">Operate</Link>
                </li>
                <li className="text-center w-full hover:bg-grayishBlue duration-200 py-2">
                  <Link to="/about">Dashboard</Link>
                </li>
                <li className="text-center w-full hover:bg-grayishBlue duration-200 py-2">
                  <Link to="/login">Logout</Link>
                </li>
                <li className="text-center w-full hover:bg-grayishBlue duration-200 py-2">
                  Role :
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
}

export default WelcomeNav;
