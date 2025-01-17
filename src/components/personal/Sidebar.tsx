import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Settings,
  HelpCircle,
  Folder,
  SquareCheck,
  Users,
  Sparkles,
} from "lucide-react";
import { InvertedHoverButton } from "./InvertedHoverButton";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard name="dashboard" /> },
    { name: "Projects", icon: <Folder name="folder" /> },
    { name: "Tasks", icon: <SquareCheck name="check-square" /> },
    { name: "Teams", icon: <Users name="users" /> },
  ];

  const footerItems = [
    { name: "Settings", icon: <Settings /> },
    { name: "Help & Support", icon: <HelpCircle /> },
  ];

  return (
    <motion.aside
      className="w-64 h-full flex flex-col justify-between py-6 bg-white"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div>
        {/* Product Name */}
        <h1 className="text-3xl text-left font-bold px-10 font-serif">
          Sundays.
        </h1>

        {/* Menu */}
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-pink-200/[0.5] hover:to-violet-300/[0.5] cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-4">{item.icon}</span>
                <span>{item.name}</span>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="px-6">
        <div
          className="bg-gradient-to-b from-pink-200/[0.5] to-violet-300/[0.5] p-4 rounded-xl mb-4 flex flex-col items-center justify-center"
          //   whileHover={{ scale: 1.02 }}
        >
          <p className="text-xl w-full font-semibold text-left font-serif">
            Upgrade <br />
            your plan
          </p>
          <p className="text-xs text-left mb-6 mt-4 font-medium font-poppins text-gray-500">
            Your trial plan ends in 12 days. Upgrade your plan and unlock full
            potential.
          </p>
          <motion.button
            className="bg-black text-sm text-white mx-2 py-2 w-[150px] px-4 rounded-full hover:bg-gray-700 border-none flex justify-center"
            whileHover={{ width: "180px" }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
          >
            <div className="flex items-center justify-center mx-2 gap-2 w-[150px] whitespace-nowrap">
              <Sparkles className="w-4 h-4 -ml-2" />
              <span>See Plans</span>
            </div>
          </motion.button>
        </div>

        {/* Footer */}
        <nav>
          <ul className="space-y-2">
            {footerItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-pink-200/[0.5] hover:to-violet-300/[0.5] cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-4">{item.icon}</span>
                <span>{item.name}</span>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
