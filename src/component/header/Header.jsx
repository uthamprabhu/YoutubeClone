import { useState } from 'react';

import './Header.css'

import iconText from '../../icons/header/iconText.svg'
import hamburger from '../../icons/header/hamburger.svg'
import notification from '../../icons/header/notification.svg'
import search from '../../icons/header/search.svg'
import { Outlet } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const profilePicUrl = "https://yt3.ggpht.com/yti/ANjgQV9IPFA95B55VtsmN82k5R8rZLzxhUs1naqc3lTimpkxXyE=s88-c-k-c0x00ffffff-no-rj"

    return (
        <>
            <div className="header-main-container">
                <div className="header-child-container-1">
                    <div className='hamburger-icon' onClick={toggleSidebar}>
                        <img src={hamburger} alt='hamburger icon' />
                    </div>
                    <div className='youtube-icon-parent'>
                        <img src={iconText} alt='YouTube logo' />
                    </div>
                </div>

                <div className="header-child-container-2">
                    <div className='search-parent-container'>
                        <div className={`search-container ${isFocused ? 'focused' : ''}`}>
                            <span className="search-icon">
                                <img src={search} alt='hamburger icon' />                        </span>
                            <input
                                className={`search-input ${isFocused ? 'search-inputExtra' : ''}`}
                                type="text"
                                placeholder="Search"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <span className='search-btn'>
                                <img src={search} alt='hamburger icon' />                        </span>
                        </div>
                        <div className='microphone'>
                            <i className="fa-solid fa-microphone" style={{ "color": "#fff" }}></i>
                        </div>
                    </div>
                </div>

                <div className="header-child-container-3">
                    <div className='create' style={{ "color": "#fff" }}>
                        &nbsp;<i class="fa-solid fa-plus"></i>&nbsp;
                        <span style={{ fontSize: '0.8em', fontWeight: '500' }}>Create</span>
                        &nbsp;
                    </div>
                    <div className='bell'>
                        <img src={notification} alt='bell icon' />
                    </div>
                    <div className='profile'>
                        <img src={profilePicUrl} alt='profile picture' width={32} height={32} />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header