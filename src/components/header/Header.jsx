import React from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'


const Header = () => {
    return (
        <div className={`paddings ${css.wrapper}`}>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Kushan
                </div>

                <ul className={`flexCenter ${css.menu}`}>
                    <li><a href="">Services</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Test</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+94 778 643 245 </p>
                        <BiPhoneCall size={"40px"}/>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Header