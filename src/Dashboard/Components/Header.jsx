import React from 'react'
import { BiCalendar, BiCoffee, BiMessageDetail } from 'react-icons/bi'
import { FaBeer } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'
import logo from "../../assests/images/logo.png"

const Header = () => {
    const [isActive, setIsActive] = React.useState(false)
    return (
        <>
            <div className="w-screen h-[80px] flex items-center justify-between px-4 shadow-md">

                <div className="text-xl font-bold ">
                    <img src={logo} alt="Logo" className="" />
                </div>
                <div className="flex items-center justify-center space-x-8 mr-5">
                    <div className="">
                        <BiCalendar size={18} />
                    </div>
                    <div className="">
                        <BiMessageDetail size={18} />
                    </div>
                    <div className="">
                        <IoIosNotificationsOutline size={20} />
                    </div>
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Avatar" className="w-6 h-6 rounded-full" />
                    </div>
                </div>

            </div>
          
        </>



    )
}

export default Header