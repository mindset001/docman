'use client'
import { FaPaperPlane, FaEdit, } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { FiDownloadCloud } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

const allDocuments = [
  { id: '20250531-PROJ-001', name: 'Contract Review', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-002', name: 'Invoice Payment', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-003', name: 'Contract Review', status: 'Approved', button: 'Outgoing', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-004', name: 'Invoice Payment', status: 'Approved', button: 'Outgoing', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-005', name: 'Contract Review', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-006', name: 'Invoice Payment', status: 'Approved', button: 'Outgoing', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-007', name: 'Contract Review', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-008', name: 'Invoice Payment', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-009', name: 'Contract Review', status: 'Signed', button: 'Signed', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com',review: 'SM Ademola' },
  { id: '20250531-PROJ-010', name: 'Invoice Payment', status: 'Approved', button: 'Outgoing', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-011', name: 'Contract Review', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-012', name: 'Invoice Payment', status: 'Signed', button: 'New', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-013', name: 'Contract Review', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-014', name: 'Invoice Payment', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-015', name: 'Contract Review', status: 'New', button: 'New', date: '12 Jan 2023, 12:09am', from: 'legal@corp.com', review: 'SM Ademola' },
  { id: '20250531-PROJ-016', name: 'Invoice Payment', status: 'Approved', button: 'New', date: '12 Jan 2023, 12:09am', from: 'adam@documan.com', review: 'SM Ademola' },
];

const ITEMS_PER_PAGE = 5;

export default function DocumentTable() {
  const [activeStatus, setActiveStatus] = useState<'New' | 'Outgoing' | 'Signed'>('New');
  const [currentPage, setCurrentPage] = useState(1);
    const [showSendModal, setShowSendModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{id: string, name: string} | null>(null);

  // Filter documents by active status
  const filteredDocuments = allDocuments.filter(doc => doc.button === activeStatus);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleStatusChange = (status: 'New' | 'Outgoing' | 'Signed') => {
    setActiveStatus(status);
    setCurrentPage(1); // Reset to first page when changing status
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

   const handleSendClick = (doc: {id: string, name: string}) => {
    setSelectedDoc(doc);
    setShowSendModal(true);
  };

  const handleSendApproval = () => {
    // Add your logic to send for approval here
    console.log(`Sending document ${selectedDoc?.id} for approval`);
    setShowSendModal(false);
  };


  // Count documents for each status
  const newCount = allDocuments.filter(doc => doc.button === 'New').length;
  const outgoingCount = allDocuments.filter(doc => doc.button === 'Outgoing').length;
  const signedCount = allDocuments.filter(doc => doc.button === 'Signed').length;

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Welcome back, Personal Assistance!</h1>
        <div className="flex gap-2">
          <button><CiSearch /></button>
          <button><GrNotification /></button>
          <button className="btn btn-outline cursor-pointer flex items-center gap-2 border rounded-lg p-2 border-[#D0D5DD]">
            <IoFilterOutline />
            <p>Filters</p>
            </button>
          <button className="btn btn-outline cursor-pointer flex items-center gap-2 border rounded-lg p-2 border-[#D0D5DD]">
            <FiDownloadCloud />
           <p> Export</p>
            </button>
            
        </div>
      </div>

      <div className='mt-6 border border-gray-200 rounded-lg p-4 bg-white shadow-sm'>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Upload Document</h1>
          <div className="flex gap-2">
            <button className="bg-[#1570EF] text-white px-4 py-2 rounded-md">Upload Document</button>
          </div>
        </div>
        
        <div className="">
          <div className="border-b border-gray-200 mb-4 flex gap-6 text-sm">
            <button 
              className={`pb-2 ${activeStatus === 'New' ? 'text-[#175CD3] font-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => handleStatusChange('New')}
            >
              New <span className='bg-[#EFF8FF] p-1 rounded-lg'> {newCount}</span>
            </button>
            <button 
              className={`pb-2 ${activeStatus === 'Outgoing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => handleStatusChange('Outgoing')}
            >
              Outgoing <span className='bg-[#EFF8FF] p-1 rounded-lg'>{outgoingCount}</span>
            </button>
            <button 
              className={`pb-2 ${activeStatus === 'Signed' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => handleStatusChange('Signed')}
            >
              Signed <span className='bg-[#EFF8FF] p-1 rounded-lg'> {signedCount}</span>
            </button>
          </div>

          <table className="w-full table-auto text-left border-t border-[#EAECF0] text-sm">
            <thead>
              <tr className="bg-gray-50 text-[#475467] text-[12px] font-500">
                <th className="p-2 w-8"><input type="checkbox" /></th>
                <th className="p-2 flex gap-2 items-center"><p>Document ID</p> <FaArrowDown /></th>
                <th className="p-2">File name</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date created</th>
                <th className="p-2">From</th>
               
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {currentDocuments.length > 0 ? (
                currentDocuments.map((doc, i) => (
                  <tr key={i} className="border-b border-[#EAECF0] h-16 hover:bg-[#EAECF0]">
                    <td className='p-2'><input type="checkbox" /></td>
                    <td className="p-2 text-[#475467] font-400 text-[14px]">{doc.id}</td>
                    <td className="p-2 text-[#475467] font-400 text-[14px]">{doc.name}</td>
                    <td className="p-2 text-[#475467] font-400 text-[14px]">
                      <span className={`px-2 py-1 rounded-[16px] text-[#475467] font-400 text-[14px] ${
                        doc.status === 'New' ? 'bg-[#F2F4F7] text-gray-700' :
                        doc.status === 'Declined' ? 'bg-[#FEF3F2] text-[#B42318]' :
                         doc.status === 'Submitted' ? 'bg-[#F4F3FF] text-[#5925DC]' :
                          doc.status === 'Approved' ? 'bg-[#ECFDF3] text-[#027A48]' :
                           doc.status === 'In review' ? 'bg-[#F0F9FF] text-[#026AA2]' :
                        'bg-[#F2F4F7] text-gray-700'
                      }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="p-2 text-[#475467] font-400 text-[14px]">{doc.date}</td>
                    <td className="p-2 text-[#475467] font-400 text-[14px]">{doc.from}</td>
                    

  {doc.button === 'New' && (
     <td className="p-2 flex gap-2">
            <div className="relative group mt-4">
              <button 
                className="text-[#667085] hover:text-blue-800 transition-colors"
                onClick={() => handleSendClick({id: doc.id, name: doc.name})}
              >
                <FaPaperPlane />
              </button>
              <span className="absolute bg-white left-1/2 -translate-x-1/2 bottom-full hidden group-hover:block px-2 py-1 text-xs text-[#333333] rounded border whitespace-nowrap">
                Sent for approval
              </span>
            </div>
            <button className="text-[#667085] hover:text-gray-800 transition-colors rounded-lg mt-2">
              <RiDeleteBin5Line size={20} />
            </button>
          </td>
  )}
           {doc.button === 'Outgoing' && (
     <td className="p-2 flex gap-2">
            <div className="relative group mt-4">
              <button 
                className="text-[#667085] hover:text-blue-800 transition-colors"
                onClick={() => handleSendClick({id: doc.id, name: doc.name})}
              >
               <BsThreeDotsVertical />
              </button>
              <span className="absolute bg-white left-1/2 -translate-x-1/2 bottom-full hidden group-hover:block px-2 py-1 text-xs text-[#333333] rounded border whitespace-nowrap">
                Send reminder
              </span>
            </div>
          
          </td>
  )}         
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-4 text-gray-500">
                    No documents found with status "{activeStatus}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <p>Page {currentPage} of {totalPages}</p>
            <div className="flex gap-2">
              <button 
                className={`${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#344054]'}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <p className='border rounded-lg p-[5px] border-[#D0D5DD]'>  Previous</p>
              </button>
              <button 
                className={`${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-[#344054] font-medium'}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
              <p className='border rounded-lg p-[5px] border-[#D0D5DD]'>  Next</p>
              </button>
            </div>
          </div>
        </div>
      </div>
        {/* Send Approval Modal */}
      {showSendModal && (
        <div className="fixed inset-0 bg-[#344054B2] opacity-100 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-[30%] w-full border">
            <div className='flex justify-between mb-4 items-center'>
              <div className='bg-[#D1FADF] rounded-full p-2'>
                <div className='bg-[#D1FADF] p-2'>
                  <IoIosCheckmarkCircleOutline color='#039855' size={20}/>
                </div>
                </div>
              <div  onClick={() => setShowSendModal(false)} className='cursor-pointer'><MdClose color='#667085' size={24}/></div>
            </div>
            <h3 className="text-[18px] font-600 mb-4 text-[#101828]">Submit document?</h3>
            <p className="mb-4 text-[#475467] text-[14px] font-400">
             Are you sure you want to submit this document? This action cannot be undone.
            </p>
            <div className="flex justify-between mt-4">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 w-[48%]"
                onClick={() => setShowSendModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-[#1570EF] text-white rounded-md hover:bg-blue-700 w-[48%]"
                onClick={handleSendApproval}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    
    </div>

    
  );
}