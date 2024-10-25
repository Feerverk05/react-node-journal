import React, { useState, useEffect } from "react";
import './Login.css';
import '../../App.scss';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import Axios from 'axios';

import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';

const Login = () => {
    
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setstatusHolder] = useState('message');

    const loginUser = (e) => {
        e.preventDefault();
        if (!loginUserName || !loginPassword) {
            setLoginStatus('Будь ласка, заповніть всі поля.');
            setstatusHolder('showMessage');
            setTimeout(() => {
                setstatusHolder('message');
            }, 4000);
        } else {
            Axios.post('http://localhost:3002/login', {
                UserName: loginUserName,
                Password: loginPassword
            }).then((response) => {
                if (response.data.message) {
                    navigateTo('/');
                    setLoginStatus('Обліковий запис не знайдено.');
                    setstatusHolder('showMessage');
                    setTimeout(() => {
                        setstatusHolder('message');
                    }, 4000);
                } else {
                    navigateTo('/Dashboard');
                }
            });
        }
    };

    return (
        <div className='loginPage flex'>
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="footerDiv flex">
                        <span className="text">У вас немає облікового запису?</span>
                        <Link to='/register'>
                            <button className='btn'>Зареєструватися</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Зображення логотипу" />
                        <h3>Ласкаво просимо!</h3>
                    </div>
                    <form action="" className='form grid'>
                        <span className={statusHolder}>{loginStatus}</span>
                        <div className="inputDiv">
                            <label htmlFor="username">Ім'я користувача</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Введіть нікнейм' onChange={(event) => {
                                    setLoginUserName(event.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Пароль</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='password' placeholder='Введіть пароль' onChange={(event) => {
                                    setLoginPassword(event.target.value);
                                }} />
                            </div>
                        </div>
                        <button type='submit' className='btn flex' onClick={loginUser}>
                            <span>Увійти</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
