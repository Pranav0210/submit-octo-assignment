import { cn } from "@/lib/utils";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string | React.ReactNode;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const gridRef = useRef();

  return (
    <div className={cn(" bg-white py-10 px-8 rounded-3xl", className)}>
      <span className="mb-6 ml-1 flex text-left text-xl font-medium font-poppins">
        Recommended Categories
      </span>
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-3"
      >
        {items.map((item, idx) => (
          <Link
            to=""
            className="relative group block py-1 px-1 h-[70px] w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={classNames(
                    {
                      "border-yellow-400/[0.7]": idx == 0,
                      "border-red-900/[0.7]": idx == 1,
                      "border-blue-400/[0.7]": idx == 2,
                      "border-purple-400/[0.7]": idx == 3,
                      "border-pink-600/[0.7]": idx == 4,
                      "border-green-500/[0.7]": idx == 5,
                      "border-indigo-500/[0.7]": idx == 6,
                      "border-yellow-500/[0.7]": idx == 7,
                    },
                    "absolute inset-0 h-full w-full border-2 dark:bg-primaryIndigo/[0.8] block rounded-2xl",
                  )}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>
                {
                  <div className="flex items-center gap-4 px-2 h-full">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                }
              </CardTitle>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-2 overflow-hidden bg-white border-2 border-[#E1E1E1] dark:border-white/[0.2] group-hover:border-[#C2C2C2] relative z-20",
        className,
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-2 h-full">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-black font-poppins text-sm text-left font-medium tracking-wide h-full",
        className,
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};
