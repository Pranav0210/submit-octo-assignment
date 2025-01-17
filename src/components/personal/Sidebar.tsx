import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Settings,
  HelpCircle,
  Folder,
  SquareCheck,
  Sparkles,
  Soup,
  MessageCircleMore,
  Receipt,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5 stroke-[1.5px]" />,
    },
    {
      name: "My Task",
      icon: <SquareCheck className="h-5 w-5 stroke-[1.5px]" />,
    },
    { name: "Meal Planner", icon: <Soup className="h-5 w-5 stroke-[1.5px]" /> },
    { name: "Documents", icon: <Folder className="h-5 w-5 stroke-[1.5px]" /> },
    { name: "Receipt", icon: <Receipt className="h-5 w-5 stroke-[1.5px]" /> },
    {
      name: "Chats",
      icon: <MessageCircleMore className="h-5 w-5 stroke-[1.5px]" />,
    },
  ];

  const footerItems = [
    { name: "Settings", icon: <Settings className="h-5 w-5 stroke-[1.5px]" /> },
    {
      name: "Help & Support",
      icon: <HelpCircle className="h-5 w-5 stroke-[1.5px]" />,
    },
  ];

  return (
    <motion.aside
      className="w-64 h-full flex flex-col justify-between py-6 bg-white"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div>
        <h1 className="text-3xl text-left font-bold px-8 font-serif">
          Sundays.
        </h1>
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center px-2 mx-2 text-gray-800 py-2 rounded-lg hover:bg-gradient-to-r hover:from-pink-200/[0.5] hover:to-violet-300/[0.5] cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-4">{item.icon}</span>
                <span className="text-sm font-medium font-poppins">
                  {item.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="px-6">
        <div className="bg-gradient-to-b from-pink-200/[0.5] to-violet-300/[0.5] p-4 rounded-xl mb-4 flex flex-col items-center justify-center">
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

        <nav className="border-t-[3px] pt-2 border-gray-200">
          <ul className="space-y-2">
            {footerItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center px-2 py-2 rounded-lg text-gray-800 hover:bg-gradient-to-r hover:from-pink-200/[0.5] hover:to-violet-300/[0.5] cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-4">{item.icon}</span>
                <span className="text-sm font-medium font-poppins">
                  {item.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
