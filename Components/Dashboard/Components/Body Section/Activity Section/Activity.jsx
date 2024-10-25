import React from 'react'
import "./Activity.css"
import { FcBusinesswoman  } from 'react-icons/fc'; 
import { FcBusinessman  } from 'react-icons/fc';
const Activity = () => {
    return (
        <div className='activitySection'>
            <div className='heading flex'>
                <h1> Нещодавна активність вчителів </h1>  
            </div>

            <div className="secContainer grid">
                <div className='singleCustomer flex'>
                  <FcBusinesswoman className = "icon" />  
                    <div className='customerDetails'>
                        <span className='name'> Савченко Валентина </span>
                        <small> Додала нове завдання </small>
                    </div>
                    <div className='duration'>
                        10 хвилин назад
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className='singleCustomer flex'>
                  <FcBusinesswoman className = "icon" />  
                    <div className='customerDetails'>
                        <span className='name'> Тетяна Пиртя </span>
                        <small> Оцінила вашу роботу </small>
                    </div>
                    <div className='duration'>
                        2 години назад
                    </div>
                </div>
            </div>


            <div className="secContainer grid">
                <div className='singleCustomer flex'>
                  <FcBusinessman className = "icon" />  
                    <div className='customerDetails'>
                        <span className='name'> Руссу Віктор  </span>
                        <small> Відправив на доопрацювання </small>
                    </div>
                    <div className='duration'>
                         3 години назад
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className='singleCustomer flex'>
                  <FcBusinessman className = "icon" />  
                    <div className='customerDetails'>
                        <span className='name'> Блаженюк Микола  </span>
                        <small> Перевірив вашу роботу </small>
                    </div>
                    <div className='duration'>
                         4 години назад
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Activity