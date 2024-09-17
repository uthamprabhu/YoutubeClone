import React from 'react'
import shortSidenav from './ShortSidenav.module.css'

import home from '../../icons/shortSidenav/home.svg'
import shorts from '../../icons/shortSidenav/shorts.svg'
import subscriptions from '../../icons/shortSidenav/subscription.svg'
import you from '../../icons/shortSidenav/you.svg'

import shortSidenavData from '../../fakeData/shortSidenav.json'

const ShortSidenav = () => {

    const shortSidenavIconsMap = {
        home: home,
        shorts: shorts,
        subscriptions: subscriptions,
        you: you
    }

    return (
        <div className={shortSidenav.shortSidenavContainer}>
            {shortSidenavData.map((data, index) => (
                <div className={shortSidenav.shortSidenavItems} tabIndex="0">
                    <img
                        src={shortSidenavIconsMap[data.icon]}
                        alt={data.name}
                    />
                    <span>{data.name}</span>
                </div>
            ))}
        </div>
    )
}

export default ShortSidenav