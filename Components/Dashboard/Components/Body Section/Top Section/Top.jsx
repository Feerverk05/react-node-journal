import React from 'react'
import "./Top.css"
import { BiSearchAlt  } from 'react-icons/bi'; 
import { TbMessageChatbot  } from 'react-icons/tb'; 
import { MdOutlineNotificationsActive  } from 'react-icons/md'; 
import { FcBusinesswoman  } from 'react-icons/fc'; 
import video from '../../../Assests/video.mp4';

const getCurrentDay = () => {
    const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];
    return currentDay;
  };

const Top = () => {
    return (
        <div className='topSection'>
            <div className='headerSection flex'>

                <div className='searchBar flex'>
                    <input type='text' placeholder = 'Search Dashboard'/>
                    <BiSearchAlt className = 'icon' /> 
                </div>

                <div className='adminDiv flex'>
                    <TbMessageChatbot className = 'icon' />
                    <MdOutlineNotificationsActive className = 'icon' />
                <div className='adminImage'>
                <FcBusinesswoman className = 'icon' />
                </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className='rightCard flex'>
                    <h1>Ласкаво просимо в Education Sphere</h1>
                    <p>Привіт, ...! Раді бачити знов!</p>

                    <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Top