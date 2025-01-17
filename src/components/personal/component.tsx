import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React from "react";

const ARTICLES = [
  {
    category: "swift",
    title: "Intro to SwiftUI",
    description: "An article with some SwitftUI basics",
    id: 1,
  },
  {
    category: "js",
    title: "Awesome React stuff",
    description: "My best React tips!",
    id: 2,
  },
  {
    category: "js",
    title: "Styled components magic",
    description: "Get to know ways to use styled components",
    id: 3,
  },
  {
    category: "ts",
    title: "A guide to Typescript",
    description: "Type your React components!",
    id: 4,
  },
];

const categoryToVariant = {
  js: "bg-yellow-100 text-yellow-600",
  ts: "bg-blue-100 text-blue-600",
  swift: "bg-red-100 text-red-600",
};

const Item = ({ article, showCategory, expanded, onClick }) => {
  const readButtonVariants = {
    hover: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  };

  return (
    <motion.li
      className="min-w-[300px] bg-gray-800 shadow-md rounded-md p-2 flex items-center justify-between cursor-pointer mb-0 text-gray-300 text-lg"
      layout
      initial="initial"
      whileHover="hover"
      onClick={onClick}
    >
      <div className="w-1/2">
        <motion.div className="font-semibold">{article.title}</motion.div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {article.description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showCategory && (
          <motion.div
            className={`px-2 py-1 rounded-md text-sm font-medium ${categoryToVariant[article.category]}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {article.category}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        layout
        variants={readButtonVariants}
        transition={{ duration: 0.25 }}
      >
        <button
          className="bg-transparent border-none text-gray-300 cursor-pointer flex"
          aria-label="read article"
          title="Read article"
          onClick={(e) => e.preventDefault()}
        >
          &#8594;
        </button>
      </motion.div>
    </motion.li>
  );
};

const Component = () => {
  const [showCategory, setShowCategory] = React.useState(false);
  const [sortBy, setSortBy] = React.useState("title");
  const [expanded, setExpanded] = React.useState(null);

  const onSortChange = (event) => setSortBy(event.target.value);

  const articlesToRender = ARTICLES.sort((a, b) => {
    const itemA = a[sortBy].toLowerCase();
    const itemB = b[sortBy].toLowerCase();

    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className="mb-4">
        <div>
          <input
            type="checkbox"
            id="showCategory2"
            className="mr-1"
            checked={showCategory}
            onChange={() => setShowCategory((prev) => !prev)}
          />
          <label htmlFor="showCategory2" className="mr-4">
            Show Category
          </label>
        </div>
        <div>
          Sort by:{" "}
          <input
            type="radio"
            id="title"
            name="sort"
            value="title"
            checked={sortBy === "title"}
            onChange={onSortChange}
            className="mr-1"
          />
          <label htmlFor="title" className="mr-2">
            Title
          </label>
          <input
            type="radio"
            id="category"
            name="sort"
            value="category"
            checked={sortBy === "category"}
            onChange={onSortChange}
            className="mr-1"
          />
          <label htmlFor="category">Category</label>
        </div>
      </div>
      <LayoutGroup>
        <motion.ul className="p-4 w-full bg-white rounded-md grid gap-4" layout>
          {articlesToRender.map((article) => (
            <Item
              key={article.id}
              expanded={expanded === article.id}
              onClick={() => setExpanded(article.id)}
              article={article}
              showCategory={showCategory}
            />
          ))}
        </motion.ul>
      </LayoutGroup>
    </>
  );
};

export default Component;
