import { useState } from 'react';
import './App.css'
import Content from './component/content/Content';
import Genres from './component/genres/Genres';
import Header from './component/header/Header';
import Sidenav from './component/sidenav/Sidenav';

const Layout = () => {
    const [isShortSidebar, setIsShortSidebar] = useState(false); // State to toggle the sidebar

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsShortSidebar(prevState => !prevState);
    };
    return (
        <>
            {/* header */}
            <Header toggleSidebar={toggleSidebar} isShortSidebar={isShortSidebar} />

            {/* sidenav */}
            <Sidenav isShortSidebar={isShortSidebar} />

            {/* genres top nav */}
            <Genres isShortSidebar={isShortSidebar} />

            {/*content*/}
            <Content isShortSidebar={isShortSidebar} />
        </>
    )
}

export default Layout