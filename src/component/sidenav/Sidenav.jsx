import { useEffect, useRef } from 'react'

import './Sidenav.css'

import ShortSidenav from '../shortSidenav/ShortSidenav'
import MainSidebar from '../MainSidebar/MainSidebar'

const Sidenav = ({ isShortSidebar }) => {
    const sidenavRef = useRef(null);

    useEffect(() => {
        const sidenav = sidenavRef.current;

        const handleScroll = (event) => {
            const isAtTop = sidenav.scrollTop === 0;
            const isAtBottom =
                sidenav.scrollTop + sidenav.clientHeight >= sidenav.scrollHeight;

            if (
                (!isAtTop && event.deltaY < 0) || // Scrolling up when not at the top
                (!isAtBottom && event.deltaY > 0) // Scrolling down when not at the bottom
            ) {
                event.stopPropagation();
            } else if (isAtTop && event.deltaY < 0) {
                // Prevent body scroll when at the top and trying to scroll up
                event.preventDefault();
            } else if (isAtBottom && event.deltaY > 0) {
                // Prevent body scroll when at the bottom and trying to scroll down
                event.preventDefault();
            }
        };

        const handleMouseEnter = () => {
            sidenav.addEventListener('wheel', handleScroll, { passive: false });
        };

        const handleMouseLeave = () => {
            sidenav.removeEventListener('wheel', handleScroll);
        };

        sidenav.addEventListener('mouseenter', handleMouseEnter);
        sidenav.addEventListener('mouseleave', handleMouseLeave);

        // Clean up the event listeners on component unmount
        return () => {
            sidenav.removeEventListener('mouseenter', handleMouseEnter);
            sidenav.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className={`${isShortSidebar ? 'shortSidenav-parent-container' : 'sidenav-parent-container'}`} ref={sidenavRef}>

            {isShortSidebar ?
                <ShortSidenav />
                :
                <MainSidebar />
            }
        </div>
    )
}

export default Sidenav