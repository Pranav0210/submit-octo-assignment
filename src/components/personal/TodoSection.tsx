import { motion } from "framer-motion";
import { Clock, Ellipsis, MessageCircle, Paperclip } from "lucide-react";

interface TodoSectionProps {
  sectionTitle: string;
  items: {
    title: string;
    category: string;
    tags: string[];
    daysLeft: number;
    progress: number;
  }[];
}

const TodoSection = ({ sectionTitle = "TODO", items }: TodoSectionProps) => {
  return (
    <section className="mt-6">
      <h3 className="text-xs flex flex-grow font-semibold mb-4 uppercase text-gray-400 text-left font-poppins">
        {sectionTitle}
        <div className="ml-auto border-2 border-transparent rounded-md hover:border-[#c2c2c2]">
          <Ellipsis
            name="more-horizontal"
            className="text-gray-500 w-6 h-6 hover:cursor-pointer"
          />
        </div>
      </h3>
      <div className="space-y-4">
        {items.map((todo, index) => (
          <motion.div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.05, rotateX: 10 }}
          >
            <div className="flex-1">
              <h4 className="text-lg font-semibold capitalize truncate w-5/12 text-left">
                {todo.title}
              </h4>
              <p className="text-sm text-gray-500 text-left">{todo.category}</p>
            </div>

            <div className="flex items-center space-x-2 mr-2">
              <span className="text-xs flex gap-1 border-2 border-[#C2C2C2/0.4] text-black font-medium py-1 px-3 rounded-md  ">
                <Paperclip className="h-4 w-4" />
                <span>{Math.floor(Math.random() * 15) + 1}</span>
              </span>
              <span className="text-xs flex gap-1 border-2 border-[#C2C2C2/0.4] text-black font-medium py-1 px-3 rounded-md  ">
                <MessageCircle className="h-4 w-4" />
                <span>{Math.floor(Math.random() * 15) + 1}</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {todo.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs bg-blue-100 text-black font-medium py-1 px-3 rounded-md  "
                >
                  {tag}
                </span>
              ))}
              <div className="flex items-center text-gray-500 mx-2">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium text-black">
                  {todo.daysLeft} Days left
                </span>
              </div>
            </div>

            <div className="ml-4 w-32">
              <div className="h-[5px] bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full"
                  style={{ width: `${todo.progress}%` }}
                ></div>
              </div>
            </div>
            <span className="text-xs font-medium w-fit ml-2">{`${todo.progress}%`}</span>

            <div className="ml-4">
              <Ellipsis
                name="more-horizontal"
                className="text-gray-500 w-6 h-6"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TodoSection;
