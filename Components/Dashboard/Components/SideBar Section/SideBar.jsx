import React, { useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assests/logo.png';
import { IoMdSpeedometer } from 'react-icons/io';
import { FaTasks } from 'react-icons/fa'; 
import { AiOutlineCalendar } from 'react-icons/ai'; 
import { SiCoursera } from 'react-icons/si'; 
import { IoIosAnalytics as IoAnalytics } from 'react-icons/io';  
import { BsQuestionDiamondFill } from 'react-icons/bs'; 
const SideBar = () => {
    const [showHelpCenter, setShowHelpCenter] = useState(false);

    const toggleHelpCenter = () => {
        setShowHelpCenter(!showHelpCenter);
    };
    return (
        <div className='sideBar grid'>
            <div className="logoDiv flex">
                <img src={Logo} alt="Logo" />
                <h2>EduSphere</h2>
            </div>
            <div className="menuDiv">
                <h3 className="divTitle">
                    Швидке меню
                </h3>
                <ul className="menulist grid">

                    <li className="listenItem">
                        <a href="#" className='menuLink flex'>
                            <IoMdSpeedometer className='icon' />
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listenItem">
                        <a href="http://localhost:5000/tasks" className='menuLink flex'>
                            <FaTasks className="icon" />
                            <span className="smallText">
                                Tasks
                            </span>
                        </a>
                    </li>

                    <li className="listenItem">
                        <a href="http://localhost:3000/rozklad" className='menuLink flex'>
                            <AiOutlineCalendar className="icon" />
                            <span className="smallText">
                                Calendar
                            </span>
                        </a>
                    </li>

                    <li className="listenItem">
                        <a href="http://localhost:7000/grades/Математика" className='menuLink flex'>
                            <IoAnalytics className="icon" />
                            <span className="smallText">
                                Analytics
                            </span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className='sideBarCard'>
            <BsQuestionDiamondFill className='icon'/> 
            <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle1"></div>

                <h3>Help Center</h3>
                <p>Having trouble in Education Sphere, please contact us from for more questions</p>
                <button className='btn' onClick={toggleHelpCenter}>
                        Go to help center
                    </button>
                    {showHelpCenter && (
                        <div className='helpCenterInfo'>
                            {/* Тут можна відображати інформацію про центр допомоги */}
                            <h3>Help Center Information</h3>
                            <p>Якщо у вас виникли питання або проблеми, будь ласка, звертайтеся до нашої служби підтримки.</p>
    <p>Email: support@edusphere.com</p>
    <p>Телефон: +38(099)-24-60-115</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
