import React from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Header = () => (
    <header className="app__header"  >
        <h1 className="app__header__title">Framer Animations</h1>
        <h3 className="app__header__subtitle">Scroll To View</h3>
        <AnchorLink href="#bottom">
            <motion.button 
                className="app__header__clickscroll" 
                animate={{ y: 15}}
                transition={{ ease: "easeIn", duration: .75, yoyo: Infinity}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
            </motion.button>
        </AnchorLink>
        <div id="bottom"></div>

    </header>
)

export default Header