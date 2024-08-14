import React from 'react'
import { SiGmail } from "react-icons/si";
import { FiHome } from "react-icons/fi";
import { RiUserSearchFill, RiBarChartFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaInbox } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import '../css/Onebox.css'
import img from '../assets/img.png'
function Onebox() {
    return (
        <div className='container'>
            <nav>
                <h4>Onebox</h4>

                <div style={{display:"flex",gap:"10px"}}>
                    <div className='button'>
                        <div>
                            <MdLightMode />
                            <MdDarkMode />

                        </div>
                    </div>
                    <h4>Tim's Workspace</h4>
                </div>
            </nav>
            <div className='box'>
                <aside>
                    <div className='main'>
                        <div className='Gmail'>
                            <SiGmail />
                        </div>
                        <div>
                            <FiHome />
                        </div>
                        <div>
                            <RiUserSearchFill />
                        </div>
                        <div>
                            <IoMailOutline />
                        </div>
                        <div>
                            <IoIosSend />
                        </div>
                        <div>
                            <TfiMenuAlt />
                        </div>
                        <div>
                            <FaInbox />
                        </div>
                        <div>
                            <RiBarChartFill />
                        </div>
                        <div className='logo'>

                        </div>
                    </div>
                </aside>
            </div>
            <div className='content'>
                <section>
                    <img src={img} alt="" />
                    <h1>It's the beginning of a legendary sales pipeline</h1>

                    <p>When you have inbound E-mails <br />
                        you'll see them here
                    </p>

                </section>
            </div>
        </div>
    )
}

export default Onebox