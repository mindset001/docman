'use client'
import { FaFileAlt, FaFolder, FaCogs, FaPaperPlane, FaUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CgSupport } from "react-icons/cg";

export default function Sidebar() {
  return (
    <aside className="bg-white w-54 min-h-screen border-r border-[#F2F4F7] flex flex-col justify-between py-4 pl-4">
      <div>
        <h2 className="text-blue-600 font-bold text-xl mb-6">Docmanager</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaFileAlt /> Documents
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaFolder /> Archived Documents
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaPaperPlane /> Templates
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <FaPaperPlane /> Bulk Send
          </a>
        </nav>
      </div>
      <div>
         <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <CgSupport /> Support
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <CiSettings /> Settings
          </a>
         
        </nav>
        <div className="mt-4 border-t border-[#F2F4F7] pt-4">
        <div className="flex items-center gap-2 text-sm">
          <FaUserCircle className="text-gray-600 text-2xl" />
          <div>
            <p className="font-medium">Olivia Rhye</p>
            <p className="text-gray-500">olivia@untitledui.com</p>
          </div>
        </div>
      </div>
      </div>
    </aside>
  );
}
