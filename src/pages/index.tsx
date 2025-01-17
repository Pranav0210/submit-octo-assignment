import Header from "../components/personal/Header";
import { InvertedHoverButton } from "../components/personal/InvertedHoverButton";
import Sidebar from "../components/personal/Sidebar";
import { HoverEffect } from "../components/personal/Cards";
import TodoSection from "../components/personal/TodoSection";
import { activeProjects, recommendedItems, todos } from "@/components/data";

function Display() {
  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <div className="shadow-xl">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-y-scroll bg-[#FAFAFA] px-8">
        <Header />
        <main className="bg-[#FAFAFA] m-6">
          <HoverEffect items={recommendedItems} />
          <InvertedHoverButton className="text-lg font-semibold ml-auto my-6 flex flex-grow">
            + New Project
          </InvertedHoverButton>
          <TodoSection sectionTitle="TODO" items={todos} />
          <div className="border-2 border-[#C2C2C2] border-dashed bg-white rounded-lg my-6 p-2 mb-10 font-poppins font-medium text-sm hover:cursor-pointer">
            + Add New Project
          </div>
          <TodoSection sectionTitle="Active Projects" items={activeProjects} />
        </main>
      </div>
    </div>
  );
}

export default Display;
