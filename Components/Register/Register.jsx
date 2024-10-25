import React, { useState } from 'react';
import './Register.css' 
import '../../App.scss' 
import '../../App.css'

import { Link, useNavigate } from 'react-router-dom' 
import { FaUserShield } from 'react-icons/fa'; 
import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs'; 
import { AiOutlineSwapRight } from 'react-icons/ai'; 

import Axios from 'axios'

import video from '../../LoginAssets/video.mp4' 
import logo from '../../LoginAssets/logo.png' 

const Register = () => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate();
    const createUser = (e)=>{
        e.preventDefault()
        Axios.post('http://localhost:3002/register', {
            Email: email,
            UserName: userName,
            Password: password
                    }).then(() => {
                    navigateTo('/Login')

                    setEmail('')
                    setUserName('')
                    setUserName('')
                    });

    }
    return (
        <div className='registerPage flex'>
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                
                    <div className="footerDiv flex">
                    <span className="text">Є обліковий запис?</span>
                    <Link to='/Login'>
                        <button className='btn'>Увійти</button>
                    </Link>
                </div>
                </div>

                
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Зображення логотипу" />
                        <h3>Зареєструватися :) </h3>
                    </div>

                    <form action="" className='form grid'>
                       

                    <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon' />
                                <input type="email" id='email' placeholder='Введіть email' onChange={(event)=>{
                                    setEmail(event.target.value)
                                }}/>
                            </div>
                        </div>


                        <div className="inputDiv">
                            <label htmlFor="username">Ім'я користувача</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='username' placeholder='Введіть нікнейм'onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Пароль</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='password' placeholder='Введіть пароль' onChange={(event)=>{
                                    setPassword(event.target.value)
                                }}/>
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Зареєструватися</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
