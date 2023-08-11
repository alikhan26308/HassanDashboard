import React from 'react'
import Header from './Components/Header'
import { MdEventAvailable, MdFormatListNumberedRtl, MdOutlinePermMedia, MdOutlineSpaceDashboard } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
import { TbCloudDownload } from 'react-icons/tb'
import {  BiCoffee } from 'react-icons/bi'
import { FaBeer } from 'react-icons/fa'
const Main = () => {
  return (
   <>
   <Header />
     <div className="grid grid-cols-[203px,auto,369px] gap-4">
                <div className=" h-screen  w-56">
                    <div className="p-4">
                        <nav>
                            <ul className="space-y-2 ">
                            <li className="text-white text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center bg-[#06BAB5] font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                        <MdOutlineSpaceDashboard className="mr-2" />
                                        Dashboard
                                    </a>
                                </li>
                                <li className="text-slate-800 pr-4  text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center  font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                    <MdFormatListNumberedRtl className="mr-2" />
                                        Projects
                                    </a>
                                </li>
                                <li className="text-slate-800 pr-8  text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center  font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                    <MdEventAvailable className="mr-2" />
                                    Events
                                    </a>
                                </li>
                                <li className="text-slate-800 pr-8  text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center  font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                    <BsPeople className="mr-2" />
                                    People
                                    </a>
                                </li>
                                <li className="text-slate-800  pr-8 text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center  font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                    <BiCoffee className="mr-2" />
                                    offters
                                    </a>
                                </li>
                                <li className="text-slate-800   text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center  font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                    <BsPeople className="mr-2" />
                                    Community
                                    </a>
                                </li>
                                <li className="text-slate-800  text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center  font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                    <MdOutlinePermMedia className="mr-2" />
                                    Media Center
                                    </a>
                                </li>
                                <li className="text-slate-800 pr-4  text-[16px] hover:text-gray-400 w-40 h-[59px] text-center flex items-center justify-center  font-FSAlbertArabicWeb rounded-md">
                                    <a href="#" className="w-full h-full flex items-center justify-center">
                                    <TbCloudDownload className="mr-2" />
                                    Data Center
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="bg-green-300">Center</div>
                <div className="bg-blue-400">Right</div>
            </div>
   </>
   
  )
}

export default Main