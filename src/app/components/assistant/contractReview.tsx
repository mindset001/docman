'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MoreVertical } from 'lucide-react';
import { FiDownloadCloud } from "react-icons/fi";
import Sky from '../../../images/sky.png'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function ContractReviewPage() {
    const [status, setStatus] = useState('');

    return (
        <div className="flex h-screen">
            {/* Main content */}
            <div className="flex flex-col flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center gap-2">
                        <FaArrowLeft className="cursor-pointer" />
                        <h1 className="text-lg font-semibold">Contract Review</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className='flex items-center gap-[1px]'>
                                    <Button className='bg-[#007DFC]'>Approve & Send</Button>
                                     <Button className='bg-[#007DFC]'>
                                        <IoIosArrowDown />
                                     </Button>
                                </div>
                               
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => setStatus('Declined')}>Declined</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setStatus('Rework')}>Rework</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline">
                            <FiDownloadCloud />
                            <p>Export</p>
                        </Button>
                    </div>
                </div>

                {/* Document view */}
                <div className="flex-1 overflow-y-auto flex mt-6">
                    {/* Left - Document */}
                    <div className="w-full md:w-3/4 pr-4">

                        <div className="bg-white p-8 shadow rounded-md">
                            <div className='flex items-center justify-between mb-4'>
                                <Image src={Sky} alt='Sky Line' className="h-10 w-20 mb-4" />
                                <p className='text-[#969696] text-[12px]'>Martynenko Marianna <br />
                                    411-311-11-18 <br />
                                    Toronto,ON <br />
                                    Bay st 777 , U7 <br />
                                    M6P 6S4</p>
                            </div>
                            <h2 className="text-[22px] font-[600] text-[#797979] mb-4">Working contract</h2>
                            <p className="text-[#969696] text-[14px] mb-4">
                                This sales proposal contract is an overview of the terms and conditions governing the contractual agreement between Company A and Company B. Company A agrees to provide Company B with the goods and services outlined in this contract within the proposed timeline.
                            </p>
                            {/* Repeat or map full contract content here */}
                            <div className="mt-8 flex justify-between text-gray-500">
                                <p className='text-[12px]'><span className='text-[9px]'>From </span>Bob Anders</p>
                                <p className='text-[12px]'><span className='text-[9px]'>For </span>Martynenko Marianna</p>
                            </div>

                            {/* Signatures Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                {/* Left - Sender */}
                                <div>

                                    <label className="text-[9px] text-[#969696] block mb-1">Date</label>
                                    <input
                                        type="date"
                                        value="03/13/2023"
                                        className="w-full border h-[26px] rounded-[7px] px-3 py-2 text-[8px] uppercase mb-2"
                                    />
                                    <label className="text-[9px] text-gray-600 block mb-1">Signature</label>
                                    <div className="w-full h-32 border rounded flex items-center justify-center">
                                        {/* Replace this with an actual signature image or canvas if dynamic */}
                                        <Image src="/signature-bob.png" alt="Bob's Signature" width={120} height={60} />
                                    </div>
                                </div>

                                {/* Right - Recipient */}
                                <div>

                                    <label className="text-[9px] text-[#969696] block mb-1">Date</label>
                                    <input
                                        type="date"
                                        placeholder="MM/DD/YYYY"
                                        className="w-full border rounded-[7px] h-[26px] px-3 py-2 text-[8px] uppercase mb-2"
                                    />
                                    <label className="text-[9px] text-gray-600 block mb-1">Signature</label>
                                    <div className="w-full h-32 border rounded" />
                                </div>
                            </div>

                        </div>


                    </div>

                    {/* Right - Page Previews */}
                    <div className="hidden md:flex flex-col w-1/4 border-l  bg-[#F3F3F4]">
                        <div className="p-2">
                            <div className="bg-white px-8 py-2 ">
                                <div className='flex items-center justify-between mb-4'>
                                    <Image src={Sky} alt='Sky Line' className="h-5 w-10 mb-4" />
                                    <p className='text-[#969696] text-[4px]'>Martynenko Marianna <br />
                                        411-311-11-18 <br />
                                        Toronto,ON <br />
                                        Bay st 777 , U7 <br />
                                        M6P 6S4</p>
                                </div>
                                <h2 className="text-[6px] font-[600] text-[#797979] mb-4">Working contract</h2>
                                <p className="text-[#969696] text-[6px] mb-4">
                                    This sales proposal contract is an overview of the terms and conditions governing the contractual agreement between Company A and Company B. Company A agrees to provide Company B with the goods and services outlined in this contract within the proposed timeline.
                                </p>
                                {/* Repeat or map full contract content here */}
                                <div className="mt-8 flex justify-between text-gray-500">
                                    <p className='text-[8px]'><span className='text-[4px]'>From </span>Bob Anders</p>
                                    <p className='text-[8px]'><span className='text-[4px]'>For </span>Martynenko Marianna</p>
                                </div>

                                {/* Signatures Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                    {/* Left - Sender */}
                                    <div>

                                        <label className="text-[6px] text-[#969696] block mb-1">Date</label>
                                        <input
                                            type="date"
                                            value="03/13/2023"
                                            className="w-full border h-[16px] rounded-[7px] px-3 py-2 text-[8px] uppercase mb-2"
                                        />
                                        <label className="text-[9px] text-gray-600 block mb-1">Signature</label>
                                        <div className="w-full h-22 border rounded flex items-center justify-center">
                                            {/* Replace this with an actual signature image or canvas if dynamic */}
                                            <Image src="/signature-bob.png" alt="Bob's Signature" width={120} height={60} />
                                        </div>
                                    </div>

                                    {/* Right - Recipient */}
                                    <div>

                                        <label className="text-[6px] text-[#969696] block mb-1">Date</label>
                                        <input
                                            type="date"
                                            placeholder="MM/DD/YYYY"
                                            className="w-full border rounded-[7px] h-[16px] px-3 py-2 text-[8px] uppercase mb-2"
                                        />
                                        <label className="text-[9px] text-gray-600 block mb-1">Signature</label>
                                        <div className="w-full h-22 border rounded" />
                                    </div>
                                </div>

                            </div>
                            <p className="text-xs mb-2 flex justify-center text-[#333333CC] font-[600] mt-4">Page 1</p>

                        </div>

                         <div className="p-2">
                            <div className="bg-white px-8 py-2 ">
                                <div className='flex items-center justify-between mb-4'>
                                    <Image src={Sky} alt='Sky Line' className="h-5 w-10 mb-4" />
                                    <p className='text-[#969696] text-[4px]'>Martynenko Marianna <br />
                                        411-311-11-18 <br />
                                        Toronto,ON <br />
                                        Bay st 777 , U7 <br />
                                        M6P 6S4</p>
                                </div>
                                <h2 className="text-[6px] font-[600] text-[#797979] mb-4">Working contract</h2>
                                <p className="text-[#969696] text-[6px] mb-4">
                                    This sales proposal contract is an overview of the terms and conditions governing the contractual agreement between Company A and Company B. Company A agrees to provide Company B with the goods and services outlined in this contract within the proposed timeline.
                                </p>
                                {/* Repeat or map full contract content here */}
                                <div className="mt-8 flex justify-between text-gray-500">
                                    <p className='text-[8px]'><span className='text-[4px]'>From </span>Bob Anders</p>
                                    <p className='text-[8px]'><span className='text-[4px]'>For </span>Martynenko Marianna</p>
                                </div>

                                {/* Signatures Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                    {/* Left - Sender */}
                                    <div>

                                        <label className="text-[6px] text-[#969696] block mb-1">Date</label>
                                        <input
                                            type="date"
                                            value="03/13/2023"
                                            className="w-full border h-[16px] rounded-[7px] px-3 py-2 text-[8px] uppercase mb-2"
                                        />
                                        <label className="text-[9px] text-gray-600 block mb-1">Signature</label>
                                        <div className="w-full h-22 border rounded flex items-center justify-center">
                                            {/* Replace this with an actual signature image or canvas if dynamic */}
                                            <Image src="/signature-bob.png" alt="Bob's Signature" width={120} height={60} />
                                        </div>
                                    </div>

                                    {/* Right - Recipient */}
                                    <div>

                                        <label className="text-[6px] text-[#969696] block mb-1">Date</label>
                                        <input
                                            type="date"
                                            placeholder="MM/DD/YYYY"
                                            className="w-full border rounded-[7px] h-[16px] px-3 py-2 text-[8px] uppercase mb-2"
                                        />
                                        <label className="text-[9px] text-gray-600 block mb-1">Signature</label>
                                        <div className="w-full h-22 border rounded" />
                                    </div>
                                </div>

                            </div>
                            <p className="text-xs mb-2 flex justify-center text-[#333333CC] font-[600] mt-4">Page 2</p>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
