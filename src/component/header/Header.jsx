import { useState } from 'react';

import './Header.css'

import create from '../../icons/youtube-create.svg'
import logo from '../../icons/youtube-favicon.svg'

const Header = () => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="header-main-container">
            <div className="header-child-container-1">
                <div className='hamburger-icon'>
                    <i className="fa-solid fa-bars" style={{ "color": "#fff" }}></i>
                </div>
                <div className='youtube-icon-parent'>
                    <span className="youtube-icon">
                        <img src={logo} alt='YouTube logo' height={35} width={35} />
                    </span>&nbsp;
                    <span className='youtube-text'>YouTube</span>
                </div>
            </div>

            <div className="header-child-container-2">
                <div className='search-parent-container'>
                    <div className={`search-container ${isFocused ? 'focused' : ''}`}>
                        <span className="search-icon">
                            <i className="fa-solid fa-magnifying-glass" style={{ "color": "#fff" }}></i>
                        </span>
                        <input
                            className={`search-input ${isFocused ? 'search-inputExtra' : ''}`}
                            type="text"
                            placeholder="Search"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <span className='search-btn'>
                            <i className="fa-solid fa-magnifying-glass" style={{ "color": "#fff" }}></i>
                        </span>
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
                    <i className="fa-regular fa-bell" style={{ "color": "#fff" }}></i>
                </div>
                <div className='profile'>
                    <i className="fa-regular fa-user" style={{ "color": "#fff" }}></i>
                </div>
            </div>
        </div>
    )
}

export default Header