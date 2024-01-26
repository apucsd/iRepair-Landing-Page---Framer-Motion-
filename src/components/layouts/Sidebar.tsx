import { cn } from "@/lib/utils";
import { HeartHandshake, LayoutDashboard, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-blue-100 col-span-2 h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "flex gap-2 bg-gray-300 hover:bg-gray-500 hover:text-white transition-all p-2 lg:p-3 rounded-md",
              {
                "bg-gray-500 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0 text-primary"></LayoutDashboard>
          <span className="truncate"> Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "flex gap-2 bg-gray-300 hover:bg-gray-500 hover:text-white transition-all p-2 lg:p-3 rounded-md",
              {
                "bg-gray-500 text-white": isActive,
              }
            )
          }
        >
          <Plus className="shrink-0 text-primary"></Plus>
          <span className="truncate"> Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "flex gap-2 bg-gray-300 hover:bg-gray-500 hover:text-white transition-all p-2 lg:p-3 rounded-md",
              {
                "bg-gray-500 text-white": isActive,
              }
            )
          }
        >
          <HeartHandshake className="shrink-0 text-primary"></HeartHandshake>
          <span className="truncate"> Services</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
