import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCalendar, faHome, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  // const [asideOpen, setAsideOpen] = useState(true);
  const navbarItems = [
    {
      name: "Dahsboard",
      icon: faHome,
      href: "/",
    },
    {
      name: "Manage Team",
      icon: faUserGroup,
      href: "/manage-team",
    },
    {},
    {
      name: "Add User",
      icon: faUser,
      href: "/add-user",
    },
    {
      name: "Calender",
      icon: faCalendar,
      href: "/calender",
    },
  ];
  return (
    <>
      <aside
        id="default-sidebar"
        className={` border-r dark:border-gray-700 md:block top-0 left-0 z-40 md:w-64 h-[calc(100vh-72px)]  transition-transform w-16`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {/* item */}

            {navbarItems.map((item) => {
              return item.name !== undefined ? (
                <li key={item.name}>
                  <NavLink
                    to={item.href as string}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg group ${
                        isActive
                          ? "text-white bg-gray-200 dark:bg-gray-700"
                          : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`
                    }
                  >
                    <FontAwesomeIcon icon={item.icon as IconDefinition} />
                    <span className="ms-3 hidden md:block">{item.name}</span>
                  </NavLink>
                </li>
              ) : (
                <hr className="border-gray-200 dark:border-gray-700" />
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};
