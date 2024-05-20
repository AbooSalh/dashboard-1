import { faBell, faMoon, faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Topbar = () => {
  const btns = [faMoon, faBell, faGear, faUser];
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ahmed Saleh
          </span>
        </a>
        <div className="">
          <ul className="flex border-gray-100 rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700">
            {btns.map((btn, i) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer block py-2 px-3  bg-blue-700 rounded bg-transparent text-blue-700 p-0  dark:text-blue-500"
                >
                  <FontAwesomeIcon icon={btn} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
