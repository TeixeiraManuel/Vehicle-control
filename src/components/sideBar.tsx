import logo from "../assets/img/logo.png";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Car,
  BarChart2,
  Clock,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
const menuItems = [
  { id: "home", icon: <Home />, label: "Home", route: "" },
  { id: "vehicle", icon: <Car />, label: "Vehicle", route: "vehicle" },
  {
    id: "monitoring",
    icon: <BarChart2 />,
    label: "Monitoring",
    route: "monitoring",
  },
  {
    id: "history",
    icon: <Clock />,
    label: "Local history",
    route: "local-history",
  },
  {
    id: "block",
    icon: <FileText />,
    label: "Block management",
    route: "block-management",
  },
  {
    id: "settings",
    icon: <Settings />,
    label: "Settings",
    route: "settings",
  },
];
export function SideBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    // recuperar o estado do localStorage ou usa a rota atual

    const savedItem = localStorage.getItem("activeMenuItem");
    const currentPath = location.pathname.slice(1) || "home";
    return savedItem || currentPath;
  });

  // Atualiza o activeItem baseado na rota atual
  useEffect(() => {
    const currentPath = location.pathname.slice(1) || "home";
    const menuItem = menuItems.find((item) => item.route === currentPath);
    if (menuItem) {
      setActiveItem(menuItem.id);
      localStorage.setItem("activeMenuItem", menuItem.id);
    }
  }, [location.pathname]);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    localStorage.setItem("activeMenuItem", itemId);
  };

  return (
    <div className="w-96 h-screen px-12 py-14 gap-12 flex flex-col">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo da vehicle control" />
        <p className="font-bold text-xl">ExpControlApp.</p>
      </div>

      <nav className="mt-12">
        <ul className="flex flex-col gap-7">
          {menuItems.map((item) => (
            <Link
              to={`/${item.route}`}
              key={item.id}
              className={`rounded-xl p-4 duration-200 cursor-pointer
                ${
                  activeItem === item.id ? "bg-blue-500" : "hover:bg-gray-100"
                }`}
              onClick={() => handleItemClick(item.id)}
            >
              <p
                className={`flex items-center gap-6 font-medium 
                  ${activeItem === item.id ? "text-white" : "text-gray-700"}`}
              >
                {item.icon} {item.label}
              </p>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex flex-1 p-4">
        <Link
          to=""
          className="flex items-end gap-6 font-medium text-gray-700 hover:text-gray-900 "
        >
          <LogOut /> Logout
        </Link>
      </div>
    </div>
  );
}
