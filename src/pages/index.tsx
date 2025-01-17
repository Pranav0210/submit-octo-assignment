import {
  BadgeCheck,
  Calendar,
  Gift,
  Home,
  Package,
  PlaneTakeoff,
  Search,
  Volleyball,
} from "lucide-react";
import Header from "../components/personal/Header";
import { InvertedHoverButton } from "../components/personal/InvertedHoverButton";
import Sidebar from "../components/personal/Sidebar";
import { HoverEffect } from "../components/personal/Cards";
import TodoSection from "../components/personal/TodoSection";

const items = [
  {
    title: "Home Help",
    icon: <Home className="text-yellow-400" />,
  },
  {
    title: "Plan an event",
    icon: <Search className="text-red-900" />,
  },
  {
    title: "Return a package",
    icon: <Package className="text-blue-400" />,
  },
  {
    title: "Send a gift",
    icon: <Gift className="text-purple-400" />,
  },
  {
    title: (
      <span>
        Schedule <br />
        an appointment
      </span>
    ),
    icon: <Calendar className="text-pink-600" />,
  },
  {
    title: "Get a passport",
    icon: <BadgeCheck className="text-green-500" />,
  },
  {
    title: "Find a kids activity",
    icon: <Volleyball className="text-indigo-500" />,
  },
  {
    title: "Plan a trip",
    icon: <PlaneTakeoff className="text-yellow-500" />,
  },
];

function Display() {
  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <div className="shadow-xl">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-y-scroll bg-[#FAFAFA] px-8">
        <Header />
        <main className="bg-[#FAFAFA] m-6">
          <HoverEffect items={items} />
          <InvertedHoverButton className="text-lg font-semibold ml-auto my-6 flex flex-grow">
            + New Project
          </InvertedHoverButton>
          <TodoSection />
          <div className="border-2 border-[#C2C2C2] border-dashed bg-white rounded-lg my-6 p-2 font-poppins font-medium text-sm hover:cursor-pointer">
            + Add New Project
          </div>
        </main>
      </div>
    </div>
  );
}

export default Display;
