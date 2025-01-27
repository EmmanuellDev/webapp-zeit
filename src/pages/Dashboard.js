import React from "react";
import { Home, Search, Video, Heart, User } from "lucide-react";

const DashboardNavbar = () => {
  const [activeTab, setActiveTab] = React.useState("Featured");

  const renderContent = () => {
    switch (activeTab) {
      case "Join Live":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <Video className="w-16 h-16 text-gray-400" />
            <p className="text-lg text-gray-500 mt-4">Currently, No Live Classes</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen">
      <div className="h-full overflow-y-auto">{renderContent()}</div>
      <div className="fixed bottom-0 left-0 right-0 bg-teal-500 text-white shadow-md">
        <div className="flex justify-between items-center px-4 py-2">
          <button onClick={() => setActiveTab("Featured")} className="flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span className="text-sm">Featured</span>
          </button>
          <button onClick={() => setActiveTab("Search")} className="flex flex-col items-center">
            <Search className="w-6 h-6" />
            <span className="text-sm">Search</span>
          </button>
          <button onClick={() => setActiveTab("Join Live")} className="flex flex-col items-center">
            <Video className="w-6 h-6" />
            <span className="text-sm">Join Live</span>
          </button>
          <button onClick={() => setActiveTab("Wishlist")} className="flex flex-col items-center">
            <Heart className="w-6 h-6" />
            <span className="text-sm">Wishlist</span>
          </button>
          <button onClick={() => setActiveTab("Profile")} className="flex flex-col items-center">
            <User className="w-6 h-6" />
            <span className="text-sm">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;