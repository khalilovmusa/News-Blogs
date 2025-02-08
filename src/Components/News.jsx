import React, { useEffect, useState } from 'react'
import Weather from './Weather'
import Calendar from './Calendar'
import "./News.css"
import userImage from '../assets/images/user.jpg'
import techImg from '../assets/images/tech.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import worldImg from '../assets/images/world.jpg'
import healthImg from '../assets/images/health.jpg'
import nationImg from '../assets/images/nation.jpg'
import axios from 'axios'

const News = () => {
    const [ headline, setHeadline ] = useState(null);
    const [ news, setNews ] = useState([]);


    useEffect(() => {
        const fetchNews = async () => {
            const URL = `https://gnews.io/api/v4/search?q=example&apikey=dae24d834d1eabc2c9f7ea8414a1bfc4`;

            const response = await axios.get(URL);
            const fetchedNews = response.data.articles;

            setHeadline(fetchedNews[0]);
        }

        fetchNews()
    },[]);

    return (
        <div className='news'>
            <header className='news-header'>
                <h1 className="logo">News & Blogs</h1>
                <div className="search-bar">
                    <form>
                        <input type="text" placeholder="Search News..." />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </header>
            <div className="news-content">
                <div className='navbar'>
                    <div className="user">
                        <img src={userImage} alt="user image" />
                        <p>Guts's Blog</p>
                    </div>
                    <nav className='categories'>
                        <h1 className='nav-heading'>Categories</h1>
                        <div className="nav-links">
                            <a href="#" className='nav-link'>General</a>
                            <a href="#" className='nav-link'>World</a>
                            <a href="#" className='nav-link'>Buisness</a>
                            <a href="#" className='nav-link'>Tech</a>
                            <a href="#" className='nav-link'>Entertainment</a>
                            <a href="#" className='nav-link'>Sports</a>
                            <a href="#" className='nav-link'>Science</a>
                            <a href="#" className='nav-link'>Health</a>
                            <a href="#" className='nav-link'>Nation</a>
                            <a href="#" className='nav-link'>
                                Bookmarks <i className="fa-regular fa-bookmark"></i>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="news-section">
                    <div className="headline">
                        <img src={headline.image} alt={headline.title} />
                        <h2 className="headline-title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tempore.
                            <i className="fa-regular fa-bookmark bookmark"></i>

                        </h2>
                    </div>
                    <div className="news-grid">
                        <div className="news-grid-item">
                            <img src={techImg} alt="News image" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={sportsImg} alt="News image" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={scienceImg} alt="News image" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={worldImg} alt="News image" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={healthImg} alt="News image" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={nationImg} alt="News image" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                        </div>
                    </div>
                </div>
                <div className="my-blogs">My Blogs</div>
                <div className="weather-calendar">
                    <Weather />
                    <Calendar />
                </div>
            </div>
            <footer className='news-footer'>Footer</footer>
        </div>
    )
}

export default News
