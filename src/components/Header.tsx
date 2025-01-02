import React from "react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#2a2a2a]">
      <div className="flex items-center gap-4">
        <span className="text-lg">Artifact Render</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="inline-flex bg-black rounded-full p-1">
          <button
            className={`px-4 py-1 rounded-full text-sm transition-colors ${
              activeTab === "preview"
                ? "bg-gray-800 text-white"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm transition-colors ${
              activeTab === "code" ? "bg-gray-800 text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
