import { motion } from "framer-motion";
import { Clock, Ellipsis } from "lucide-react";

const TodoSection = () => {
  const todos = [
    {
      title: "Complete project report",
      category: "Work",
      tags: ["Urgent", "High Priority"],
      daysLeft: 2,
      progress: 75,
    },
    {
      title: "Buy groceries",
      category: "Personal",
      tags: ["Routine"],
      daysLeft: 5,
      progress: 30,
    },
  ];

  return (
    <section className="mt-6">
      <h3 className="text-md font-semibold mb-4 text-gray-400 text-left font-poppins">
        TODO
      </h3>
      <div className="space-y-4">
        {todos.map((todo, index) => (
          <motion.div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.05, rotateX: 10 }}
          >
            <div className="flex-1">
              <h4 className="text-lg font-semibold truncate w-5/12 text-left">
                {todo.title}
              </h4>
              <p className="text-sm text-gray-500 text-left">{todo.category}</p>
            </div>

            <div className="flex items-center space-x-4">
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
