import { Bell, Search, Command } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-[#FAFAFA] flex items-center justify-between -mx-2 px-4 py-6">
      <h2 className="text-xl font-semibold text-gray-800 font-poppins">
        My Task
      </h2>

      <div className="flex flex-grow items-center space-x-4">
        <div className="flex flex-grow h-10 mx-20 w-full items-center border-2 border-[#E1E1E1] rounded-lg px-3 py-2">
          <Search className="text-gray-500 w-6 h-6 mr-2" />
          <input
            type="text"
            placeholder="Search or type a command"
            className="bg-transparent outline-none text-gray-800 w-full text-xs font-poppins font-medium"
          />
          <button className="ml-auto text-black bg-[#F2F2F2] hover:bg-[#FAFAFA] hover:border-none border-none shadow-md flex items-center gap-1 py-0 px-2">
            <Command name="command-f" className="w-4 h-4" />{" "}
            <span className="font-medium font-poppins">F</span>
          </button>
        </div>

        <div className="relative">
          <Bell className="text-gray-500 w-6 h-6" />
          {/* <span className="absolute top-0 right-0 block w-2 h-2 bg-gray-500 rounded-full animate-ping">
            <span className="absolute top-[0.5] right-[0.5] block w-1 h-1 bg-black rounded-full" />
          </span> */}
          <span className="absolute top-0 right-0">
            <span className="relative top-0 right-0 rounded-full inset-0 h-3 w-3 bg-gray-500 block animate-ping">
              <span className="absolute rounded-full inset-0 h-1.5 w-1.5 bg-black m-auto  text-white items-center justify-center flex"></span>
            </span>
          </span>
        </div>

        <img
          src="src\assets\fc39d4d5-be33-4d6d-b1b7-741c14901893.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
