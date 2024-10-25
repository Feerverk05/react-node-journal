import React from 'react'
import "./Listing.css"
import { Link } from 'react-router-dom';
import { BsArrowRight  } from 'react-icons/bs'; 

const Listing = () => {
    return (
        <div className='listingSection'>
           <div className='leftCard flex'>
            <div className="main">
                <div className='textDiv'>
                    <h1>Мої завдання</h1>

                    <div className='flex'>
                        <span>
                            Сьогодні <br/> <small> 5 завданнь</small>
                        </span>
                        <span>
                            Цього тижня <br/> <small> 8 завдання</small>
                        </span>

                        <span>
                            Просрочено <br/> <small> 3 завдання</small>
                        </span>
                    </div>
                    <span className="flex link">
    <Link to="http://localhost:5000/tasks">
        Перейти до моїх завдань <BsArrowRight className="icon" />
    </Link>
</span>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Listing