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

export const todos = [
  {
    title: "Schedule me an appointment with my endocrinologist",
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

export const activeProjects = [
  {
    title: "Plan An Event",
    category: "Planning",
    tags: ["Urgent", "High Priority"],
    daysLeft: 32,
    progress: 26,
  },
  {
    title: "Return a Package",
    category: "Delivery",
    tags: ["In Progress", "Mid"],
    daysLeft: 4,
    progress: 74,
  },
  {
    title: "Get a Passport",
    category: "Personal Help",
    tags: ["Input Needed", "Low"],
    daysLeft: 22,
    progress: 38,
  },
];

export const recommendedItems = [
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
